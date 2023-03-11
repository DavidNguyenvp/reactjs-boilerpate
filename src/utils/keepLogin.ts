import CryptoJS, { enc, DES, mode, pad, CipherParams } from 'crypto-js'
import COOKIE from '../constants/Common'
import Config from '../constants/Config'
import { ILoginCookie, TLoginValues } from '../types'
import { convertStringToBooleanValue, localStorageGetItem } from './common'

// PRIVATE KEY
export const privateKey = import.meta.env.VITE_PRIVATE_KEY_LOGIN || ''

// Persistent cookies
const expirationDate = new Date()
expirationDate.setFullYear(expirationDate.getFullYear() + 1)
const expirationDateValue = '; path=/; expires=' + expirationDate.toUTCString()

// Config mode crypto-js
const configMode = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
}

// EQUAL
const EQUAL = '='

/**
 * Encryption
 * @param {string} message The string to be encrypted
 * @param {string} key key
 * @return {string} encrypted string
 */
export function encryptByDES(message: string, key: string): string {
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, configMode)
    return encrypted.toString()
}

/**
 * Decrypt
 * @param {string} cipherText ciphertext
 * @param {string} key key
 * @return {string} Decrypted string
 */
export function decryptByDES(cipherText: string, key: string): string {
    const keyHex = enc.Utf8.parse(key)
    const cipherParams: CipherParams = {
        ciphertext: enc.Base64.parse(cipherText),
    }
    const decrypted = DES.decrypt(cipherParams, keyHex, {
        mode: mode.ECB,
        padding: pad.Pkcs7,
    })
    return decrypted.toString(enc.Utf8)
}

/**
 * Get cookie by key
 * @param name
 * @returns string | null
 */

export function getCookieByKey(name: string): string | null {
    const cookies = document.cookie.split('; ')

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=')

        if (cookieName === name) {
            return decodeURIComponent(cookieValue)
        }
    }

    return null
}

/**
 * delete cookie by key
 * @param name
 */
export function deleteCookieByKey(name: string) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;'
}

// Clear all cookies
export function clearAllCookies() {
    const cookies = document.cookie.split('; ')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf(EQUAL)
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
}

/**
 * Set cookies when user login
 * @param {ILoginCookie} value
 */
export function setLoginCookies(value: ILoginCookie) {
    const { username, password, userInfo, exDay, token, roles } = value
    const expiryDate = new Date() // get time
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000 * exDay)
    // Encrypt username, password, expires when setCookies
    window.document.cookie = COOKIE.USERNAME + EQUAL + encryptByDES(username, privateKey) + expirationDateValue
    window.document.cookie = COOKIE.PASSWORD + EQUAL + encryptByDES(password, privateKey) + expirationDateValue
    window.document.cookie = COOKIE.USERINFO + EQUAL + JSON.stringify(userInfo) + expirationDateValue
    window.document.cookie =
        COOKIE.ROLES + EQUAL + encryptByDES(JSON.stringify(roles), privateKey) + expirationDateValue

    window.document.cookie =
        COOKIE.EXPIRES + EQUAL + encryptByDES(expiryDate.toUTCString(), privateKey) + expirationDateValue
    window.document.cookie = COOKIE.TOKEN + EQUAL + token + expirationDateValue
}

/**
 * Get cookies account login
 * @returns
 */
export function getAccountLoginCookies(): TLoginValues {
    let username = ''
    let password = ''
    let expiryDate = ''
    if (document.cookie.length > 0) {
        const arr = document.cookie.split('; ') // please change the format shown here according to your own code
        for (const item of arr) {
            const arr2 = item.split(EQUAL)
            if (arr2[0] === COOKIE.PASSWORD) {
                password = decryptByDES(arr2[1], privateKey)
            } else if (arr2[0] === COOKIE.EXPIRES) {
                expiryDate = decryptByDES(arr2[1], privateKey)
            } else if (arr2[0] === COOKIE.USERNAME) {
                username = decryptByDES(arr2[1], privateKey)
            }
        }
    }
    if (expiryDate) {
        const date = new Date()
        const expireDate = new Date(expiryDate)
        if (date <= expireDate) {
            return { username, password }
        }
    } else {
        clearAllCookies()
    }
    return { username, password }
}

// Get userInfo cookies
export function getUserInfoCookies() {
    const userInfoCookies = getCookieByKey(COOKIE.USERINFO)
    if (!userInfoCookies) return
    const userInfo = JSON.parse(userInfoCookies)
    return userInfo
}

// Clear login cookies when logout
export function clearLoginCookies() {
    const IS_SAVE_PASSWORD = convertStringToBooleanValue(localStorageGetItem(Config.SAVE_PASSWORD))
    if (IS_SAVE_PASSWORD) {
        deleteCookieByKey(COOKIE.USERINFO)
        deleteCookieByKey(COOKIE.STORE)
        deleteCookieByKey(COOKIE.ROLES)
        deleteCookieByKey(COOKIE.TOKEN)
    } else {
        clearAllCookies()
    }
}

/**
 * Set new cookies or update cookies
 * @param {IAccountInforCookie} value
 */
export function setNewCookies(keyName: string, value: Record<string, unknown>, decrypt?: boolean) {
    const valueStr = JSON.stringify(value)
    const cookieValue = decrypt ? encryptByDES(valueStr, privateKey) : valueStr
    window.document.cookie = `${keyName}=${cookieValue}${expirationDateValue}`
}
