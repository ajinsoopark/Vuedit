import SubvueditFeed from './subvueditFeed';
import { connect } from 'react-redux';
import { fetchSubvueditPosts } from '../../actions/postActions';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        subvuedits: state.subvuedit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSubvueditPosts: posts => dispatch(fetchSubvueditPosts(posts))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubvueditFeed);