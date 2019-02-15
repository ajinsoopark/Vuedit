import { ADD_USER } from '../actions/actionTypes';

const initialState = {}

const userReducer = (state = initialState, action) => {
    let newState = {...state};

    if (action.type === ADD_USER) {
        newState.users = newState.users.concat(action.payload)
    }
    return newState;
}

export default userReducer;