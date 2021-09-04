import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../../AppContext/Context';

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(Context);

  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Redirect to="/Login" />
      }
    />
  )
}

export default RoutesPrivate;