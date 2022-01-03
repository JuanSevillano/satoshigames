export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_FAILED = 'LOAD_USERS_FAILED';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';
export const FILTER_BY_COUNTRY_FAILED = 'FILTER_BY_COUNTRY_FAILED';
export const FILTER_BY_COUNTRY_SUCCESS = 'FILTER_BY_COUNTRY_SUCCESS';



export type User = {
    id?: string
    name: string
    country: string
    avatar: string
    last_name: string
}

export interface LoadUsers {
    type: typeof LOAD_USERS_START
}

export interface LoadUsersFailed {
    type: typeof LOAD_USERS_FAILED
    payload: { errorMessage: string }
}

export interface LoadUsersSuccess {
    type: typeof LOAD_USERS_SUCCESS,
    payload: { users: Array<User> }
}

export interface FilterByName {
    type: typeof FILTER_BY_NAME
    payload: { name: string }
}

export interface FilterByCountry {
    type: typeof FILTER_BY_COUNTRY
}

export interface FilterByCountryFailed {
    type: typeof FILTER_BY_COUNTRY_FAILED
    payload: { errorMessage: string }
}

export interface FilterByCountrySuccess {
    type: typeof FILTER_BY_COUNTRY_SUCCESS
    payload: { users: Array<User> }
}

export type UsersDispatchActions =
    LoadUsers |
    LoadUsersFailed |
    LoadUsersSuccess |
    FilterByName |
    FilterByCountry |
    FilterByCountryFailed |
    FilterByCountrySuccess