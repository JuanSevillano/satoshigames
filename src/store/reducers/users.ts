import {
    FilterByCountry,
    FilterByCountryFailed,
    FilterByCountrySuccess,
    FilterByName,
    FILTER_BY_COUNTRY,
    FILTER_BY_COUNTRY_FAILED,
    FILTER_BY_COUNTRY_SUCCESS,
    FILTER_BY_NAME,
    LoadUsers,
    LoadUsersFailed,
    LoadUsersSuccess,
    LOAD_USERS_FAILED,
    LOAD_USERS_START,
    LOAD_USERS_SUCCESS,
    User
} from "../types/users"

interface UsersI {
    error: boolean | string
    users: Array<User>
    isFetching: boolean
    errorMessage: string
    filteredUsers: Array<User>
}

const initialState: UsersI = {
    error: false,
    isFetching: false,
    users: [],
    filteredUsers: [],
    errorMessage: ''
}

const loadUsersFailed = (state: UsersI, action: LoadUsersFailed): UsersI => {


    const { errorMessage } = action.payload;

    const updatedState: UsersI = {
        ...state,
        error: errorMessage,
        isFetching: false
    };

    return updatedState
}

const loadUsersSuccess = (state: UsersI, action: LoadUsersSuccess): UsersI => {

    const { users } = action.payload;

    const updatedState: UsersI = { ...state, users, isFetching: false };

    return updatedState
}

const loadUsersStart = (state: UsersI, action: LoadUsers): UsersI => {

    return {
        ...state,
        isFetching: true
    }
}

const filterByName = (state: UsersI, action: FilterByName): UsersI => {

    const { name } = action.payload;

    const filteredUsers = state.users.filter((user: any) => user.name.first.toLowerCase().includes(name) || user.name.last.toLowerCase().includes(name));

    const updatedState: UsersI = {
        ...state,
        filteredUsers
    }

    return updatedState
}


const filterByCountry = (state: UsersI, action: FilterByCountry): UsersI => {

    const updatedState: UsersI = {
        ...state,
        isFetching: true
    }

    return updatedState
}

const filterByCountrySuccess = (state: UsersI, action: FilterByCountrySuccess): UsersI => {

    const { users } = action.payload;

    const updatedState: UsersI = {
        ...state,
        filteredUsers: users,
        isFetching: false
    }

    return updatedState
}

const filterByCountryFailed = (state: UsersI, action: FilterByCountryFailed): UsersI => {

    const { errorMessage } = action.payload;

    const updatedState: UsersI = {
        ...state,
        error: errorMessage,
        isFetching: false
    }

    return updatedState
}

const usersReducer = (state: UsersI = initialState, action: any): UsersI => {
    switch (action.type) {
        case LOAD_USERS_START: return loadUsersStart(state, action);
        case LOAD_USERS_FAILED: return loadUsersFailed(state, action);
        case LOAD_USERS_SUCCESS: return loadUsersSuccess(state, action);
        case FILTER_BY_NAME: return filterByName(state, action);
        case FILTER_BY_COUNTRY: return filterByCountry(state, action);
        case FILTER_BY_COUNTRY_SUCCESS: return filterByCountrySuccess(state, action);
        case FILTER_BY_COUNTRY_FAILED: return filterByCountryFailed(state, action);
        default: return state;
    }
}

export default usersReducer;