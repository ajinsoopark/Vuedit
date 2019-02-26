import { connect } from 'react-redux';

import CurrentPost from './currentPost';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentPost);