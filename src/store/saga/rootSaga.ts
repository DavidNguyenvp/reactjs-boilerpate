import { takeLatest } from 'redux-saga/effects'
import { LOGIN as doLoginRequest } from '../actions/loginActions'
import { loginRequest } from './loginSaga'

export default function* rootSaga() {
    yield takeLatest(doLoginRequest, loginRequest)
}
