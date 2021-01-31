import React, {createRef, RefObject} from 'react';

class CreateTaskPage extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTask(new FormData(this.ref.current));
    }

    ref: RefObject<HTMLFormElement> = createRef();

    render() {
        return(
            <form ref={this.ref} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Имя</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="введите имя пользователя" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="введите email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Текст</label>
                    <input type="text" className="form-control" id="text" name="text" placeholder="введите текст задачи" required />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-1" type="submit">Создать задачу</button>
            </form>
        )
    }
}

export default CreateTaskPage;
