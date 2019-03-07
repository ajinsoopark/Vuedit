import { connect } from 'react-redux';

import LeftFeed from './leftFeed';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        users: state.users,
        comments: state.comments
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftFeed);
