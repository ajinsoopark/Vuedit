import SubvueditFeed from './subvueditFeed';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        subvuedits: state.subvuedit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubvueditFeed);