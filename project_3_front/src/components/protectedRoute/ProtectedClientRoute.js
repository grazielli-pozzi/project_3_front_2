import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const ProtectedClientRoute = ({ isUserLogged, role, component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => {
            if(isUserLogged && role==='cliente') {
                return <Component {...props} />
            }
            return <Redirect to='/login'/>
        }} />
    );
}

export default ProtectedClientRoute;