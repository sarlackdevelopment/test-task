import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { signup, login } from '../actions';
import welcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signup,
    login,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(welcomePage);
