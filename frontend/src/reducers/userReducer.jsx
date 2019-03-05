import { ADD_USER } from '../actions/userActions';

const initialState = []

const userReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ADD_USER: {
            return newState = newState.concat(action.payload)
        }
        default: {
            return newState
        }
    } 
}

export default userReducer;