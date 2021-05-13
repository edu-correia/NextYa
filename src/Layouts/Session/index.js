import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ROUTES from '../../Routes/routes';

export default()=>{
    const Home = React.lazy(() => import('../../Pages/Home/Home'));

    return (
        <Router>
            <Route exact path={ROUTES.HOME} component={Home} />
        </Router>
    );
}
