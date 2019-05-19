import React, { useReducer } from 'react';

const pw = process.env.REACT_APP_ADMIN_PASSWORD;

const initialState = {
  isAuthenticated: false,
};

export const types = {
  login: 'LOGIN',
  logout: 'LOGOUT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return authorize(action)
        ? {
            ...state,
            isAuthenticated: true,
          }
        : state;
    case types.logout:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

function authorize({ username, password }) {
  return username === 'admin' && password === pw;
}

export const AuthContext = React.createContext(initialState);

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>;
};
