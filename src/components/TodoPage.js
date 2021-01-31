import React from 'react';

import CreateTaskPage from '../containers/CreateTaskPage';

class TodoPage extends React.Component {

    currentPage = 1;
    sortField = '';

    componentDidMount() {
        const { fetchTodo } = this.props;
        Promise.all([
            fetchTodo(),
        ])
    }

    handlePage = (event) => {
        event.preventDefault();
        const { fetchTodo } = this.props;
        this.currentPage = Number(event.target.textContent);
        Promise.all([
            fetchTodo(this.currentPage)
        ])
    }

    handleSort = (event) => {
        event.preventDefault();
        const { fetchTodo } = this.props;
        const fieldName = event.target.textContent;
        let direction = 'asc';
        if (this.sortField === '') {
            this.sortField = fieldName;
        } else {
            this.sortField = '';
            direction = 'desc';
        }
        Promise.all([
            fetchTodo(this.currentPage, fieldName, direction),
        ])
    }

    render() {
        const { todo } = this.props;
        const { tasks, total_task_count } = todo;

        const sortIconAsc =
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-sort-down-alt" viewBox="0 0 16 16">
                <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
            </svg>

        const sortIconDesc =
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-sort-up-alt" viewBox="0 0 16 16">
                <path
                    d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
            </svg>

        const fields = ['id', 'Username', 'Email', 'Text'].map((item) => (
            <th style={{cursor: 'pointer'}} onClick={this.handleSort} scope="col">
                {this.sortField === item ? sortIconDesc : sortIconAsc}
                {item}
            </th>))

        debugger

        const elements = tasks.map((item) => {
            const {id, username, email, text} = item;
            return (
                <tr>
                    <th scope="row">{id}</th>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{text}</td>
                </tr>
            )
        });

        const lengthOfPagination = Math.floor(total_task_count / 3)
        const paginationElements = Array.apply(null, {length: lengthOfPagination})
            .map((_, index) => (
                <li key={String(index) + index} className="page-item">
                    <a onClick={this.handlePage} className="page-link" href='#'>{index}</a>
                </li>
            ));

        return (
            <div className='container'>
                <h1 className="text-center">Список задач</h1>
                <CreateTaskPage />
                <table className="table mb-3">
                    <thead>
                        <tr>
                            {fields}
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
