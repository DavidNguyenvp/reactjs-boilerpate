/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { store } from '../app/store'
import COOKIE from '../constants/Common'
import { callHideLoading, callShowLoading } from '../store/slice/loadingSlide'
import { getCookieByKey } from '../utils/keepLogin'

//Loading

export const handleShowLoading = () => {
    store.dispatch(callShowLoading())
}

export const handleHideLoading = () => {
    store.dispatch(callHideLoading())
}

// server baseUrl
const baseUrl = `${import.meta.env.REACT_APP_BACKEND_BASE_URL}`

const headers = {
    'Access-Control-Allow-Origin': '*',
    'x-frontend-domain': window.location.host,
} as any

/**
 * API service
 */
const ApiService = {
    /**
     * @param options ApTOptions
     * @param params
     * @returns api response
     */
    request: async (options: any, params?: any) => {
        const axiosBody = { ...options }
        const token = getCookieByKey(COOKIE.TOKEN)
        if (options.dontNeedToken !== true) {
            headers['Authorization'] = 'Bearer ' + token
        }

        headers['Content-Type'] = options.upload ? 'multipart/form-data' : 'application/json'

        if (params) {
            switch (options.method) {
                case 'GET':
                case 'DELETE':
                    axiosBody['params'] = params
                    break
                default:
                    axiosBody['data'] = params
            }
        }

        // query
        const transformRequestOptions = (params: any) => {
            let options = ''
            Object.entries<any>(params).forEach(([key, value]) => {
                if (typeof value !== 'object' && value) {
                    options += `${key}=${value}&`
                } else if (Array.isArray(value)) {
                    value.forEach((el) => {
                        options += `${key}=${el}&`
                    })
                }
            })
            return options ? options.slice(0, -1) : options
        }

        const axiosConfig = axios.create({
            baseURL: baseUrl,
            headers: headers,
            withCredentials: false,
            paramsSerializer: (params) => {
                return transformRequestOptions(params)
            },
        })

        return await axiosConfig({ ...axiosBody })
            .then((response) => {
                let data = response.data
                if (options.responseType === 'arraybuffer' && response.headers['content-disposition']) {
                    const filename = response.headers['content-disposition'].substring(
                        response.headers['content-disposition'].indexOf('=') + 1
                    )
                    data = {
                        context: response.data,
                        filename: filename,
                    }
                }
                return { data, error: undefined }
            })
            .catch((error) => {
                return { data: undefined, error: error }
            })
    },
}

export default ApiService
