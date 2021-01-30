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
        const elements = todo.map((item) => {
            const {id, username, email, text} = item;
            return (
                <tr>
                    <th scope="row">{id}</th>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${text}</td>
                </tr>
            )
        });

        return (
            <>
                <h1 class="text-center">Список задач</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </>);
    }
}

export default TodoPage;
