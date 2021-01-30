import React from 'react';

class SignupForm extends React.Component {
    state = {
        email: {
            value: ''
        },
        password: {
            value: ''
        },
        repeatPassword: {
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
        const { email, password, repeatPassword } = this.state;
        this.props.onSubmit(email.value, password.value, repeatPassword.value);
    }

    render() {
        const { email, password, repeatPassword} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Е-майл</label>
                    <input type="email" value={email.value} onChange={this.handleInputChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Введите е-майл" />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" value={password.value} onChange={this.handleInputChange} className="form-control" name="password" placeholder="Введите пароль" />
                </div>
                <div className="form-group">
                    <label>Повторите пароль</label>
                    <input type="password" value={repeatPassword.value} onChange={this.handleInputChange} className="form-control" name="repeatPassword" placeholder="Введите пароль" />
                </div>

                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        )
    }
}

export default SignupForm;
