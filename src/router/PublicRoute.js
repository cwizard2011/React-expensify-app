import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest // rest is just a variable name for other things that have not been destructured
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to= "/dashboard" />        
      ) : (
          <Component {...props} />
        )
    )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
