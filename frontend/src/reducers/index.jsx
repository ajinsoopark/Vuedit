import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
});

export default rootReducer;