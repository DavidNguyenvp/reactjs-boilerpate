import COOKIE, { EROLE } from 'constants/Common'
import { getCookieByKey, decryptByDES, privateKey } from './keepLogin'

export const userHasStore = () => {
    const storeCookie = getCookieByKey(COOKIE.STORE)
    const store = storeCookie && decryptByDES(storeCookie, privateKey)
    return store ? true : false
}
export const userIsLogin = () => {
    const token = getCookieByKey(COOKIE.TOKEN)
    return token ? true : false
}
export const userIsAdmin = () => {
    const rolesCookie = getCookieByKey(COOKIE.ROLES)
    const roles = rolesCookie ? JSON.parse(decryptByDES(rolesCookie, privateKey)) : ''

    return roles.includes(EROLE.ADMIN)
}
