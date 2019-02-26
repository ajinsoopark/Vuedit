import { connect } from 'react-redux';
import { addPost, fetchAllPosts } from '../../actions/postActions';
import { fetchPostVotes } from '../../actions/voteActions';

import PostsFeed from './PostFeed';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch(addPost(post)),
        fetchAllPosts: posts => dispatch(fetchAllPosts(posts)),
        fetchPostVotes: votes => dispatch(fetchPostVotes(votes))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsFeed);