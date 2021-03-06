import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { logout } from '../actions';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomePage);
