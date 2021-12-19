import {
    LoadUsers,
    LoadUsersFailed,
    LoadUsersSuccess,
    LOAD_USERS_FAILED,
    LOAD_USERS_START,
    LOAD_USERS_SUCCESS
} from "../types/users"

interface UsersI {
    error: boolean
    users: Array<any>
    isFetching: boolean
    errorMessage: string
    filteredUsers: Array<any>
}

const initialState: UsersI = {
    error: false,
    isFetching: false,
    users: [],
    filteredUsers: [],
    errorMessage: ''
}

const loadUsersFailed = (state: UsersI, action: LoadUsersFailed): UsersI => {



    return state
}

const loadUsersSuccess = (state: UsersI, action: LoadUsersSuccess): UsersI => {

    const { users } = action.payload;

    const updatedState: UsersI = { ...state, users };



    debugger
    return state
}

const loadUsersStart = (state: UsersI, action: LoadUsers): UsersI => {

    return state
}


const usersReducer = (state: UsersI = initialState, action: any): UsersI => {
    switch (action.type) {
        case LOAD_USERS_START: return loadUsersStart(state, action);
        case LOAD_USERS_FAILED: return loadUsersFailed(state, action);
        case LOAD_USERS_SUCCESS: return loadUsersSuccess(state, action);
        default: return state;
    }
}

export default usersReducer;