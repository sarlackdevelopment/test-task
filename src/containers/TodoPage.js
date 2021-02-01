import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTodo, updateTask} from '../actions/todo';
import TodoPage from '../components/TodoPage';

const mapStateToProps = state => ({todo: state.todo.todo});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodo,
    updateTask
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);
