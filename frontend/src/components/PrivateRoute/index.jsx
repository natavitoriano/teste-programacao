import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = useSelector(state => state.reducerToken.token);

    return (
        <Route { ...rest } render={(props) =>
            token ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/', state: {from: props.location}  }} />
            )
        }/>
    )
}

export default PrivateRoute;
