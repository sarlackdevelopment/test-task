import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTodo} from '../actions/todo';
import * as fromTodos from '../reducers/todo';
import TodoPage from '../components/TodoPage';

const mapStateToProps = state => {
    //const sdf = fromTodos.getByIds(state.todo, state.todo.todoIds);
    return {
        //todos: fromTodos.getByIds(state.todo, state.todo.todoIds)
        todo: state.todo.todo
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodo
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);
