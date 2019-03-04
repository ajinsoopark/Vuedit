import { connect } from 'react-redux';
import { fetchPost } from '../../../actions/postActions';
import { fetchSubvuedit } from '../../../actions/subvueditActions';

import CurrentPost from './currentPost';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        subvuedits: state.subvuedit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: post => dispatch(fetchPost(post)),
        fetchSubvuedit: subvuedit => dispatch(fetchSubvuedit(subvuedit))
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentPost);