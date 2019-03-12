import SubvueditFeed from './subvueditFeed';
import { connect } from 'react-redux';
import { fetchSubvueditPosts } from '../../actions/posts';
import { fetchSubvuedit } from '../../actions/subvuedits';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        subvuedits: state.subvuedit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSubvueditPosts: posts => dispatch(fetchSubvueditPosts(posts)),
        fetchSubvuedit: sub => dispatch(fetchSubvuedit(sub))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubvueditFeed);