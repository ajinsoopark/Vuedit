import { ADD_USER,
         CURRENT_VIEWING_PROFILE } from '../actions/users';

const initialState = {
    users:[],
    currentViewingProfile: {},
    currentUser: {}
}

const userReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ADD_USER: {
            return newState.users = newState.concat(action.payload)
        }
        case CURRENT_VIEWING_PROFILE: {
            newState.currentViewingProfile = action.payload
            return newState
        }
        default: {
            return newState
        }
    } 
}

export default userReducer;