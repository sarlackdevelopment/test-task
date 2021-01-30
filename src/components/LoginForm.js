import React, {createRef, RefObject} from 'react';

class LoginForm extends React.Component {
    state = {
        username: {
            value: ''
        },
        password: {
            value: ''
        }
    }

    handleInputChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState((prevState)=>({
            [name]: {
                ...prevState[name],
                value
            }
        }))
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(new FormData(this.ref.current));
    }

    ref: RefObject<HTMLFormElement> = createRef();

    render() {

        const { username, password} = this.state;
        return(
            <form ref={this.ref} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Логин</label>
                    <input type="login" value={username.value} onChange={this.handleInputChange} className="form-control" name="username" placeholder="Введите логин" />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" value={password.value} onChange={this.handleInputChange} className="form-control" name="password" placeholder="Введите пароль" />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        )
    }
}

export default LoginForm;
