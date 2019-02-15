import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});

export default rootReducer;