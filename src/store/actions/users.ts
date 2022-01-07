import { Dispatch } from "redux";
import api from "../axiosConfig";
import { FILTER_BY_COUNTRY, FILTER_BY_COUNTRY_FAILED, FILTER_BY_COUNTRY_SUCCESS, FILTER_BY_NAME, LOAD_USERS_FAILED, LOAD_USERS_START, LOAD_USERS_SUCCESS, User } from "../types/users";
export const loadUsers = (pagination?: number) => async (dispatch: Dispatch) => {

    dispatch(loadUsersStart());

    try {

        const params = !pagination ? '?page=1&results=15&seed=abc' : `?page=${pagination}&results=15&seed=abc`
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


export const filterByCountry = (countries: [], pagination?: number) => async (dispatch: Dispatch) => {

    dispatch(filterByCountryStart());

    try {

        const values = Object.values(countries).map((val: any) => val.value.toLowerCase())
        const ctrValues = values.join(',').toLowerCase();
        const params = !pagination ? `?page=1&results=15&seed=abc&nat=${ctrValues}` : `?page=${pagination}&results=15&seed=abc&nat=${ctrValues}`
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
    type: FILTER_BY_COUNTRY_FAILED,
    payload: { errorMessage }
})

const filterByCountrySuccess = (users: Array<User>) => ({
    type: FILTER_BY_COUNTRY_SUCCESS,
    payload: { users }
})