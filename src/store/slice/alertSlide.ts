import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseAPI, ETypeOfAlert } from '../model/response'
import { RootState } from '../store/Store'

export interface ErrorMessageState {
    show: boolean
    response: ResponseAPI
}

const initialState: ErrorMessageState = {
    show: false,
    response: {
        title: '',
        status: 0,
        content: '',
        typeOfAlert: ETypeOfAlert.DEFAULT,
    },
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        callShowAlert(state, action: PayloadAction<ResponseAPI>) {
            state.show = true
            state.response = action.payload
        },
        callHideAlert(state) {
            state.show = false
        },
    },
})

// Actions
export const { callShowAlert, callHideAlert } = alertSlice.actions

// Selector
export const isShowAlertSelector = (state: RootState) => state.alert.show
export const alertSelector = (state: RootState) => state.alert.response

// Reducers
const alertReducer = alertSlice.reducer
export default alertReducer
