import { AppDispatch } from 'app/store'
import { keepLoginSuccess } from 'store/slice/loginSlice'

export function checkAutoLogin(dispatch: AppDispatch) {
    dispatch(keepLoginSuccess())
}
