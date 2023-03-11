import { IPaginationCalc } from '../types'

// Cookie
namespace COOKIE {
    export const USERNAME = 'username'
    export const PASSWORD = 'password'
    export const TOKEN = 'token'
    export const EXPIRES = 'expires'
    export const USERINFO = 'user_info'
    export const ROLES = 'roles'
    export const STORE = 'store'
}
export default COOKIE

// Select Search
export enum ISelectSearch {
    PRICE = 'selectListProduct.product',
    PROMOTION = 'selectListProduct.promotion',
    HARVESTTIME = 'selectListProduct.harvestTime',
    NEW = 'selectStatusContract.new',
}

// Pagination
export const DEFAULT_VALUE_PAGINATION: IPaginationCalc = {
    pageSize: 10,
    defaultPage: 1,
    totalRecord: 0,
    pageIndex: 1,
}

export enum PAGINATION {
    PAGE = 'page',
}

// Date format

export enum DATE_FORMAT {
    FORWARD_SLASH = 'DD/MM/YYYY',
    MINUS = 'DD-MM-YYYY',
    DATE_TIME = 'DD/MM/YYYY HH:mm',
}

// Dropdown style
export enum DROPDOWN_STYLE {
    DEFAULT,
    CHANGE_TEXT,
    NAVLINK,
}

export enum NAMESIBAR {
    NAME = 'account.cart',
}

export enum RESPONSE_CODE {
    SUCCESS = 'SUCCESS',
}

export enum EROLE {
    USER = 'USER',
    ADMIN = 'ADMIN',
    STORE = 'STORE',
}

// Local products
export enum Product {
    ITEMS = 'cartItems',
}
