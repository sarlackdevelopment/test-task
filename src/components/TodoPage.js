import React from 'react';

class TodoPage extends React.Component {

    componentDidMount() {
        const { fetchTodo } = this.props;
        Promise.all([
            fetchTodo(),
        ])
    }

    handlePage = (event) => {
        event.preventDefault();
        const { fetchTodo } = this.props;
        Promise.all([
            fetchTodo(Number(event.target.textContent)),
        ])
    }

    render() {
        const { todo } = this.props;
        const { tasks, total_task_count } = todo;

        const elements = tasks.map((item) => {
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

        const lengthOfPagination = Math.floor(total_task_count / 3)
        const paginationElements = Array.apply(null, {length: lengthOfPagination})
            .map((_, index) => (
                <li className="page-item">
                    <a onClick={this.handlePage} className="page-link" href='#'>{index}</a>
                </li>
            ));

        return (
            <div className='container'>
                <h1 class="text-center">Список задач</h1>
                <table className="table mb-3">
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

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center d-flex flex-wrap">
                        {paginationElements}
                    </ul>
                </nav>
            </div>);
    }
}

export default TodoPage;
