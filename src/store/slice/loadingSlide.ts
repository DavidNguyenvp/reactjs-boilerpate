import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/Store'

// Interface
interface LoadingInitialState {
    show: boolean
}

// InitialState
const initialState: LoadingInitialState = {
    show: false,
}

// Slice
const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        callShowLoading(state) {
            state.show = true
        },
        callHideLoading(state) {
            state.show = false
        },
    },
})

// Export slice
export const { callShowLoading, callHideLoading } = loadingSlice.actions

// Reducer & Export
const loadingReducer = loadingSlice.reducer
export default loadingReducer

// Selector
export const statusLoadingSelector = (state: RootState) => state.loading.show
