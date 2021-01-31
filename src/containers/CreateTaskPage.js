import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createTask} from '../actions/todo';
import CreateTaskPage from '../components/CreateTaskPage';

const mapStateToProps = state => ({todo: state.todo.todo});

const mapDispatchToProps = dispatch => bindActionCreators({
    createTask
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTaskPage);
