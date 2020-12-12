import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const ProtectedLawyerRoute = ({ isUserLogged, role, component: Component, ...rest }) => {
    console.log(rest);
    return(
        <Route {...rest} render={(props) => {
            if(isUserLogged && role==='advogado') {
                return <Component {...props} />
            }
            return <Redirect to='/login'/>
        }} />
    );
}

export default ProtectedLawyerRoute;