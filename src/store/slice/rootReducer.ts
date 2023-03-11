import alertReducer from './AlertSlide'
import errorMessageReducer from './errorMessageSlice'
import loadingReducer from './loadingSlide'
import loginReducer from './loginSlice'

const rootReducer = {
    login: loginReducer,
    errorMessage: errorMessageReducer,
    alert: alertReducer,
    loading: loadingReducer,
}

export default rootReducer
