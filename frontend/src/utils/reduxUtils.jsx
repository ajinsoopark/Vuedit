import { addUser } from '../actions/userActions';
import { addPost } from '../actions/postActions';

export const mapStateToProps = state => {
    return {
        users: state.users,
        posts: state.posts
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user)),
        addPost: post => dispatch(addPost(post))
    }
}