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


const usersReducer = (state: UsersI = initialState, action: any): UsersI => {
    switch (action.type) {
        default: return state;
    }
}

export default usersReducer;