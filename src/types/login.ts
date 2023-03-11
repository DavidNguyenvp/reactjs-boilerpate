import { IMedia } from './common'

export interface IUserInfo {
    birthday?: string
    email: string
    firstName?: string
    lastName?: string
    fullName: string
    id: string
    status: string
    username: string
    phone: string
    avatar: IMedia | null | undefined
    idObj: string
    address?: string
    provinceId?: string
    districtId?: string
    wardId?: string
}

export interface ILoginResponse {
    token: string
    roles: Array<string>
    user: IUserInfo
    avatar: IMedia | null
}

export interface ILoginCookie {
    username: string
    roles: string[]
    password: string
    userInfo: IUserInfo
    exDay: number
    token: string
}

export interface IAccountInforCookie {
    userInfo: IUserInfo
}

export interface IAccountInfoCookie {
    avatar: string
    fullName: string
    userId: IUserInfo
    exDay: number
    token: string
}
