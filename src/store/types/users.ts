export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_FAILED = 'LOAD_USERS_FAILED';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';


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

export type UsersDispatchActions =
    LoadUsers |
    LoadUsersFailed |
    LoadUsersSuccess