import { call, put } from 'redux-saga/effects'
import Api from '../../constants/Api'
import sendRequest from '../../services/ApiService'
// import Api from '../../api/Api'
// import sendRequest from '../../api/services/ApiServices'
import { UserLogin } from '../model/User'
import { loginSuccess } from '../slice/loginSlice'

export async function* loginRequest(action: UserLogin): AsyncIterable<object> {
    try {
        const data = yield call(sendRequest, Api.auth.login, action.payload)
        if (!!data) {
            yield put({ type: loginSuccess.type, payload: data })
        }
    } catch (error) {
        yield put({ type: 'FETCH_USER_ERROR', error })
    }
}
