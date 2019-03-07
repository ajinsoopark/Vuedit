import UserProfile from './userProfile';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users';
import { fetchUserPosts } from '../../actions/posts';
import { fetchUserComments } from '../../actions/comments';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments,
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),
        fetchUserPosts: posts => dispatch(fetchUserPosts(posts)),
        fetchUserComments: comments => dispatch(fetchUserComments(comments))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);