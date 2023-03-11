import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessage } from '../model/errorMessage'
import { RootState } from '../store/Store'

export interface ErrorMessageState {
    show: boolean
    error: ErrorMessage
}

const initialState: ErrorMessageState = {
    show: false,
    error: {
        title: '',
        content: '',
    },
}

const errorMessageSlice = createSlice({
    name: 'errorMessage',
    initialState,
    reducers: {
        callShowModal(state, action: PayloadAction<ErrorMessage>) {
            state.show = true
            state.error = action.payload
        },
        callHideModal(state) {
            state.show = false
        },
    },
})

//actions
export const { callShowModal, callHideModal } = errorMessageSlice.actions

//selector
export const selectErrorInfo = (state: RootState) => state.errorMessage.error
export const selectErrorStatus = (state: RootState) => state.errorMessage.show

//reducers
const errorMessageReducer = errorMessageSlice.reducer
export default errorMessageReducer
