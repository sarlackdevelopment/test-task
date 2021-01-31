import React from 'react';
import TodoPage from '../containers/TodoPage';
import LoginPage from '../containers/LoginPage';
import WelcomePage from '../containers/WelcomePage';

const App = () => (
    <>
        {localStorage.getItem('token') ? <WelcomePage /> : <LoginPage />}
        <TodoPage />
    </>
);

export default App;
