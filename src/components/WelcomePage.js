import React from 'react';
// import {Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';
//import SignupForm from './SignupForm';

class welcomePage extends React.Component {
    state = {
        vhod: true
    }

    onSubmitVhod = (event) => {
        event.persist();
        this.setState((prevState) => ({
            vhod: true
        }))
    }

    onSubmitRegister = (event) => {
        event.persist();
        this.setState((prevState) => ({
            vhod: false
        }))
    }

    render() {
        //const {signup, login, isAuthenticated} = this.props;
        const {login} = this.props;

        // let classVhod = 'nav-link';
        // let classRegister = 'nav-link';
        // if (this.state.vhod) {
        //     classVhod = classVhod + ' active';
        // } else {
        //     classRegister = classRegister + ' active';
        // }

        // if (isAuthenticated){
        //     return (
        //         <Redirect to="/todo" />
        //     )
        // }
        return (
            <div className="card text-center">
                <div className="card-header">
                    <h3 className='nav-link'>Вход</h3>
                </div>
                <div className="card-body">
                    <LoginForm onSubmit={login} />
                </div>
            </div>
            // <div className="card text-center">
            //     <div className="card-header">
            //         <ul className="nav nav-tabs card-header-tabs">
            //             <li className="nav-item" onClick={this.onSubmitVhod}>
            //                 <p className={classVhod}>Вход</p>
            //             </li>
            //             <li className="nav-item" onClick={this.onSubmitRegister}>
            //                 <p className={classRegister}>Регистрация</p>
            //             </li>
            //         </ul>
            //     </div>
            //     <div className="card-body">
            //         {this.state.vhod ? (
            //             <LoginForm onSubmit={login} />
            //         ) : (
            //             <SignupForm onSubmit={signup} />
            //         )
            //         }
            //     </div>
            // </div>
        )
    }
}

export default welcomePage;
