import * as SubvueditAPIUtil from '../utils/subvuedits';

export const CURRENT_SUBVUEDIT = 'CURRENT_SUBVUEDIT';
export const ADD_SUBVUEDIT = 'ADD_SUBVUEDIT';
export const SUBVUEDITS = 'SUBVUEDITS';

export const currentSubvuedit = payload => ({ type: CURRENT_SUBVUEDIT, payload });
export const allSubvuedits = payload => ({ type: SUBVUEDITS, payload });
export const addSubvuedit = payload => ({ type: ADD_SUBVUEDIT, payload })

export const fetchSubvuedit = (id) => dispatch => {
    return SubvueditAPIUtil.fetchSubvuedit(id)
    .then(sub => dispatch(currentSubvuedit(sub.data.data)));
}

export const fetchAllSubvuedits = () => dispatch => {
    return SubvueditAPIUtil.fetchAllSubvuedits()
    .then(subs => dispatch(allSubvuedits(subs.data.data)));
}