import React from 'react';

class TodoPage extends React.Component {
    componentDidMount() {
        const { fetchTodo } = this.props;
        Promise.all([
            fetchTodo(),
        ])
    }
    render() {
        const { todo } = this.props;
        const elements = todo.map((item)=>{
            //const{_id, name} = item;
            const{id} = item;
            return(
                // <li key={_id} className="list-group-item">{name}</li>
                <li key={id} className="list-group-item">{id}</li>
            )
        })
        return (
            <div>
                <h1>Список задач</h1>
                <ul className="list-group todo-list">
                    {elements}
                </ul>
            </div>
        )
    }
}

export default TodoPage;
