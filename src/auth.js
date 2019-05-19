import React, { useReducer } from 'react';

const pw = process.env.REACT_APP_ADMIN_PASSWORD;

const reducer = (state, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
      return action.username === 'admin' && action.password === pw
        ? {
            ...state,
            isAuthenticated: true,
          }
        : state;
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>;
};
