import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import { signup, login } from '../actions';
import { logout } from '../actions';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //signup,
    logout
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomePage);
