import React, { useReducer } from 'react';

const admin = process.env.REACT_APP_ADMIN_USERNAME;
const pw = process.env.REACT_APP_ADMIN_PASSWORD;

const key = Buffer.from(`${new Date().getDate()}:${process.env.REACT_APP_SECRET}`).toString('base64');
const localKey = 'race-support-auth';

const initialState = {
  isAuthenticated: localStorage.getItem(localKey) === key,
};

export const types = {
  login: 'LOGIN',
  logout: 'LOGOUT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.login:
      if (authorize(action)) {
        localStorage.setItem(localKey, key);
        return {
          ...state,
          isAuthenticated: true,
        };
      } else {
        return state;
      }
    case types.logout:
      localStorage.removeItem(localKey);
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

function authorize({ username, password }) {
  return username === admin && password === pw;
}

export const AuthContext = React.createContext(initialState);

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>;
};
