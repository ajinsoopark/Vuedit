import { connect } from 'react-redux';
import { fetchSubvueditPosts } from '../../actions/postActions';
import SubvueditContent from './subvueditContent';

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
)(SubvueditContent);