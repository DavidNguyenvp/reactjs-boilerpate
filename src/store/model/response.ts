export enum EResponseCode {
    SUCCESS = 'SUCCESS',
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export enum ETypeOfAlert {
    SUCCESS,
    WARNING,
    DEFAULT,
}

export interface ResponseAPI {
    title: string
    status: number
    content: string
    typeOfAlert: ETypeOfAlert
}

export interface IError {
    responseCode?: string
    responseDesc?: string
    message?: string
}

export interface IErrorResponse {
    responseCode: string
    responseDesc: string
    data: IError
    status: number
}
