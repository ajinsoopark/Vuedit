import { connect } from 'react-redux';
import { addPost, fetchAllPosts } from '../../actions/postActions';

import PostsFeed from './PostFeed';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPosts: posts => dispatch(fetchAllPosts(posts))
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsFeed);