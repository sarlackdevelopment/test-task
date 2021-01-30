import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import TodoPage from '../containers/TodoPage';
import WelcomePage from '../containers/WelcomePage';
import history from '../utils/history';

const App = () =>(
    <>
        <WelcomePage />
        <TodoPage />
    </>
    // <Router history={history}>
    //     <Switch>
    //         <Route exact path='/(welcome)?' component={WelcomePage} />
    //         {/*<PrivateRoute path='/todo' component={TodoPage} />*/}
    //         <Route path='/todo' component={TodoPage} />
    //         <Redirect to='/' />
    //     </Switch>
    // </Router>
);

export default App;
