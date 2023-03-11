import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/Store'

export interface ILoginState {
    token?: string
    roles?: Array<number>
}

const initialState: ILoginState = {
    token: '',
    roles: [],
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<ILoginState>) {
            state.token = action.payload.token
            state.roles = action.payload.roles
        },
    },
})

export const { loginSuccess } = loginSlice.actions

//reducers
const loginReducer = loginSlice.reducer
export default loginReducer

export const loginTokenSelector = (state: RootState) => state.login.token
