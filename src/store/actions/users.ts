import { Dispatch } from "redux";
import api from "../axiosConfig";
import { FILTER_BY_COUNTRY, FILTER_BY_NAME, LOAD_USERS_FAILED, LOAD_USERS_START, LOAD_USERS_SUCCESS, User } from "../types/users";
export const loadUsers = (pagination?: number) => async (dispatch: Dispatch) => {

    dispatch(loadUsersStart());

    try {

        const params = !pagination ? '?page=1&results=10&seed=abc' : `?page=${pagination}&results=10&seed=abc`
        const { data } = await api.get(params);
        if (data.results) {
            dispatch(loadUsersSuccess(data.results));
        }

    } catch (error: any) {

        const _currentError = error.toJSON();
        dispatch(loadUsersFailed(_currentError.message as string));
    }



}

const loadUsersStart = () => ({
    type: LOAD_USERS_START
});

const loadUsersFailed = (errorMessage: string) => ({
    type: LOAD_USERS_FAILED,
    payload: { errorMessage }
});

const loadUsersSuccess = (users: Array<User>) => ({
    type: LOAD_USERS_SUCCESS,
    payload: { users }
})


export const filterUsersByName = (name: string) => ({
    type: FILTER_BY_NAME,
    payload: { name }
})


export const filterByCountry = (country: string, pagination?: number) => async (dispatch: Dispatch) => {

    dispatch(filterByCountryStart());

    try {

        const params = !pagination ? `?page=1&results=10&seed=abc&nat=${country}` : `?page=${pagination}&results=10&seed=abc&nat=${country}`
        const { data } = await api.get(params);
        if (data.results) {
            dispatch(filterByCountrySuccess(data.results));
        }

    } catch (error: any) {

        const _currentError = error.toJSON();
        dispatch(filterByCountryFailed(_currentError.message as string));
    }

}

const filterByCountryStart = () => ({
    type: FILTER_BY_COUNTRY
})

const filterByCountryFailed = (errorMessage: string) => ({
    type: FILTER_BY_COUNTRY,
    payload: { errorMessage }
})

const filterByCountrySuccess = (users: Array<User>) => ({
    type: FILTER_BY_COUNTRY,
    payload: { users }
})