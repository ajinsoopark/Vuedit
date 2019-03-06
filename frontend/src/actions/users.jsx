import * as UserAPIUtils from '../utils/users';

export const ADD_USER = 'ADD_USER';
export const CURRENT_VIEWING_PROFILE = 'CURRENT_VIEWING_PROFILE';

export const addUser = payload => ({ type: ADD_USER, payload });
export const currentViewingProfile = payload => ({ type: CURRENT_VIEWING_PROFILE, payload });

export const fetchUser = (id) => dispatch => {
    return UserAPIUtils.fetchUser(id)
    .then(user => dispatch(currentViewingProfile(user.data.data)))
}
