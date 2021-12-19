import { Dispatch } from "redux";
import api from "../axiosConfig";
import { LOAD_USERS_FAILED, LOAD_USERS_START, LOAD_USERS_SUCCESS, User } from "../types/users";

export const loadUsers = (pagination?: number) => async (dispatch: Dispatch) => {

    dispatch(loadUsersStart());

    try {

        const params = !pagination ? '?page=1&results=10&seed=a¡xy' : `?page=${pagination}&results=10&seed=abc`
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