import React from 'react';

const WelcomePage = ({logout}) => {
    return (
        <div className='container'>
            <div className="card text-center">
                <div className="card-header">
                    <h3 className='nav-link'>Приветствую, о повелитель задач!</h3>
                </div>
                <button onClick={logout} className="btn btn-primary btn-lg btn-block mb-1" type="submit">Выход</button>
            </div>
        </div>
    )
}

export default WelcomePage
