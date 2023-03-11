import React from 'react'
import { EResponseCode } from '../store/model/response'

// Select Option
export type TOption = {
    value: string
    name: string
}

//Routes
export type TRoutesItem = {
    element: React.ReactNode
    path: string
    layouts?: JSX.Element
}
export type TRoutes = {
    routes: TRoutesItem[]
    layout?: JSX.Element
}

// Login
export type TLoginValues = {
    username: string
    password: string
}

// Register
export type TRegisterValues = {
    fullName: string
    username: string
    email: string
    phoneNumber: string
    password: string
    rePassword: string
}

// Confirm email
export type TConfirm = {
    email: string
}
// Footer

//Contact
export type TContactValues = {
    email: string
    name: string
    phone: string
    description: string
}

//Promotion Infomation
export type TPromotionValue = {
    email: string
}

// Action  -
export enum InputQuantity {
    DECREASE,
    INCREASE,
}

// Response API
export interface Response<T> {
    responseCode: EResponseCode
    responseDesc: string
    result: T
}

// Pagination
export interface IPaginationCalc {
    pageSize: number
    defaultPage: number
    totalRecord: number
    pageIndex: number
}

// Menu
export interface IMenuItem {
    path: string
    name: string
    icon: React.ReactNode
}

// Media (Image,...)
export interface IMedia {
    id: string
    objectId: string
    objectType: string
    refValue: string
    refType: string
    mediaId: string
}
export type TContactValue = {
    name: string
    phoneNumber: string
    address: string
    email: string
    content: string
}
// Api
export type TApi<T> = {
    method: string
    url: string
    data?: T
    params?: object
    responseType?: string
    dontNeedToken?: boolean

    // evaluate
}
export enum IEvaluate {
    BAD = 'detail-store.bad',
    NOTGOOD = 'detail-store.notGood',
    RATHER = 'detail-store.rather',
    GOOD = 'detail-store.good',
    WONDERFUL = 'detail-store.wonderful',
}
// Checkbox
export interface ICheckBox {
    id: number
    label: string
    value: string
}
// Product rate management
export type TProductRateManagementValues = {
    orderCode: string
    productName: string
    customerName: string
    avatar: string
    productComments: {
        id: string
        productId: string
        userId: string
        userName: string
        star: number | undefined
        content: string
        createdTime: string
        replyDate: string
        replyContent: string
    }
}

export type TPhoneNumberValue = {
    phoneNumber: string
}

export type TOTPNumberValue = {
    OTPNumber: string
}
export type TNewPasswordValue = {
    uid: string
    token: string
    yourPassword: string
    retypePassword: string
}
