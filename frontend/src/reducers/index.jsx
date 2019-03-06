import { combineReducers } from 'redux';
import userReducer from './users';
import postReducer from './posts';
import commentReducer from './comments';
import subvueditReducer from './subvuedits';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    subvuedit: subvueditReducer
});

export default rootReducer;