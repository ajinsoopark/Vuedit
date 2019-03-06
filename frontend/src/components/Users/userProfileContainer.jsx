import UserProfile from './userProfile';
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/users'

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments,
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);