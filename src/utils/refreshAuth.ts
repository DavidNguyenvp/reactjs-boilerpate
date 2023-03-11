import Api from '../constants/Api'
import COOKIE from '../constants/Common'
import sendRequest from '../services/ApiService'
import { API } from '../store/model/common'
import { clearLoginCookies, getAccountLoginCookies, setNewCookies } from './keepLogin'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function refreshAuth(api: API, param?: Record<string, unknown>): Promise<void> {
    //refresh auth
    const loginCookies = getAccountLoginCookies()
    const { username, password } = loginCookies
    if (!username || !password) {
        clearLoginCookies()
        return
    }
    const loginResponse = await sendRequest(Api.auth.login, { username, password })
    if (loginResponse.error) {
        clearLoginCookies()
        window.location.pathname = '/login'
        return
    }
    const { token } = loginResponse.result
    setNewCookies(COOKIE.TOKEN, token)
    //retry previous request
    const response = await sendRequest(api, param)
    if (response.error) return
    return response
    // return
}

export default refreshAuth
