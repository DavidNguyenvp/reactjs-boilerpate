/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosError } from 'axios'
import { store } from '../app/store'
import { API } from '../store/model/common'
import { ETypeOfAlert, IErrorResponse } from '../store/model/response'
import { callShowAlert } from '../store/slice/AlertSlide'
import refreshAuth from '../utils/refreshAuth'
import HttpService from './httpService'

export const handleShowAlert = (alertContent: any) => {
    store.dispatch(callShowAlert(alertContent))
}

const sendRequest = async (api: API, params?: Record<string, unknown>) => {
    try {
        const { data } = await HttpService.request(api, params)
        return data
    } catch (error: unknown) {
        if (error instanceof Error) {
            let title = ''
            let content = ''
            const message = 'A system error has occurred!'

            if (axios.isAxiosError(error)) {
                const { response } = error as AxiosError<IErrorResponse>

                if (response) {
                    const { data: responseData, status } = response

                    if (status === 401) {
                        return refreshAuth(api, params)
                    }

                    if (responseData) {
                        title = responseData.responseCode || ''
                        content = responseData.responseDesc || ''
                    }
                }
            }

            const errorMsg = {
                show: true,
                title: title || error.message,
                typeOfAlert: ETypeOfAlert.WARNING,
                content: content || message,
            }

            handleShowAlert(errorMsg)
            return error
        } else {
            throw new Error('An unknown error occurred.')
        }
    }
}

export default sendRequest
