import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import voteReducer from './voteReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    votes: voteReducer
});

export default rootReducer;