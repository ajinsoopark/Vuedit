import { connect } from 'react-redux';
import { fetchPostComments, currentComments } from '../../actions/commentActions';

import CommentsFeed from './commentsFeed';

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        currentComments: comments => dispatch(currentComments(comments)),
        fetchPostComments: comments => dispatch(fetchPostComments(comments))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsFeed);