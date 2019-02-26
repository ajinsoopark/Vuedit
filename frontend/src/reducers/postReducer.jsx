import { ADD_POST } from '../actions/postActions';

const initialState = [];

const postReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ADD_POST: {
            return newState = newState.concat(action.payload)
            break;
        }
    }
    
    return newState;
}

export default postReducer;