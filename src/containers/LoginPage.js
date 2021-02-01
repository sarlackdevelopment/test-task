import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { login } from '../actions';
import LoginPage from '../components/LoginPage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
