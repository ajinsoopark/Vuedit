import { CURRENT_SUBVUEDIT,
         SUBVUEDITS,
         ADD_SUBVUEDIT } from '../actions/subvueditActions';

const initialState = {
    changesMade: true,
    currentSubvuedit: null,
    subvueditList: []
    };

const subvueditReducer = (state = initialState, action) => {
let newState = {...state};

switch (action.type) {
    case ADD_SUBVUEDIT: {
        if (newState.changesMade) {
            newState.subvueditList = [...newState.subvueditList, ...action.payload]
            newState.changesMade = false
            return newState
        }
        break;
    }
    case SUBVUEDITS: {
        if (newState.changesMade) {
            newState.subvueditList = [...action.payload]
            newState.changesMade = false
            return newState
        }
        break;
    }
    case CURRENT_SUBVUEDIT: {
        newState.currentSubvuedit = action.payload
        return newState
    }
    default: {
        return newState;
    }
}

return newState;
}

export default subvueditReducer;