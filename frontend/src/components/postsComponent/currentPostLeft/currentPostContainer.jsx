import { connect } from 'react-redux';
import { fetchPost } from '../../../actions/postActions';

import CurrentPost from './currentPost';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: post => dispatch(fetchPost(post))
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentPost);