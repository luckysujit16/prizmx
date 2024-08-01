import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner';

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
  if (loading) return <Spinner />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  // Render the child routes if authenticated
  return <Outlet />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
