/* eslint-disable @typescript-eslint/no-explicit-any */
import { DATE_FORMAT } from 'constants/Common'
import dayjs from 'dayjs'

// LocalStorage
/**
 * Set item
 * @param keyName
 * @param value
 */
export function localStorageSetItem(keyName: string, value: string) {
    localStorage.setItem(keyName, value)
}

/**
 * Get item
 * @param keyName
 * @returns
 */
export function localStorageGetItem(keyName: string) {
    return localStorage.getItem(keyName)
}

/**
 * Remove item
 * @param keyName
 */
export function localStorageRemoveItem(keyName: string) {
    localStorage.removeItem(keyName)
}

/**
 * Convert string value to boolean value
 * @param value
 * @returns
 */
export function convertStringToBooleanValue(value: string | null) {
    const bool = value === 'true' ? true : false
    return bool
}

// Format price
export const formatPrice = (price: any) => {
    return new Intl.NumberFormat().format(price)
}

// Percentage discount Calculation
export const percentageDiscount = (newPrice: number, oldPrice: number) => {
    return (100 - (newPrice / oldPrice) * 100).toFixed()
}

// Format date
export const formatDate = (value: any, dateFormat: DATE_FORMAT): string => {
    return dayjs(value).format(dateFormat)
}

/**
 * Format VN phonenumber
 * @param phoneNumber
 * @returns
 */
export function formatVNPhoneNumber(phoneNumber: string) {
    // Remove all non-numeric characters from the phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '')

    // Check if the number is valid
    if (cleanNumber.length !== 10) {
        return 'Invalid Phone Number'
    }

    // Format the number to xxxx xxx xxx
    const formattedNumber = `${cleanNumber.substring(0, 4)} ${cleanNumber.substring(4, 7)} ${cleanNumber.substring(7)}`

    return formattedNumber
}

// Unique ID
export const generateUniqueId = () => {
    const timestamp = Date.now()
    const randomNumber = Math.random()
    const hexadecimalString = randomNumber.toString(16)

    return `id-${timestamp}-${hexadecimalString}`
}
export const calculateOriginalPrice = (price: number, percent?: number) => {
    if (!percent) return
    return (price / ((100 - percent) / 100)).toFixed()
}
