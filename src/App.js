import React, { useEffect } from "react";
import AppRouter from "./routes/AppRoutes";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import { LOGOUT } from './actions/types';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }

    const handleStorageChange = () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
};

export default App;
