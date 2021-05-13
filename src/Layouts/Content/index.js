import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ROUTES from '../../Routes/routes';
import CircularProgress from '@material-ui/core/CircularProgress';

const Content = () => {
    const Home = React.lazy(() => import('../../Pages/Home/Home'));

    return (
        <Suspense fallback={<CircularProgress />}>
            <Router>
                <Route exact path={ROUTES.HOME} component={Home} />
            </Router>
        </Suspense>
    );
}

export default Content;
