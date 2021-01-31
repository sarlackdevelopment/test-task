import React from 'react';
import LoginForm from './LoginForm';

const welcomePage = ({login}) => {
    return (
        <div className='container'>
            <div className="card text-center">
                <div className="card-header">
                    <h3 className='nav-link'>Вход</h3>
                </div>
                <div className="card-body">
                    <LoginForm onSubmit={login} />
                </div>
            </div>
        </div>
    )
}

export default welcomePage
