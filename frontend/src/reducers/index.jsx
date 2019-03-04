import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import subvueditReducer from './subvueditReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    subvuedit: subvueditReducer
});

export default rootReducer;