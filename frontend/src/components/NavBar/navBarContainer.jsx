import { connect } from 'react-redux';
import NavBar from './NavBar';
import { fetchAllSubvuedits } from '../../actions/subvuedits';

const mapStateToProps = state => {
    return {
        subvuedits: state.subvuedit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllSubvuedits: subs => dispatch(fetchAllSubvuedits(subs))
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(NavBar);