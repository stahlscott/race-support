import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Form } from 'semantic-ui-react';

import { paths } from '../../routes';
import { AuthContext, types } from '../../auth';

import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth.state;
  const login = () => auth.dispatch({ type: types.login, username, password });

  return isAuthenticated === true ? (
    <Redirect to={paths.registration} />
  ) : (
    <Container className="container">
      <Form>
        <Form.Input
          placeholder="Username"
          label="Username"
          name="username"
          value={username}
          onChange={(e, v) => setUsername(v.value)}
        />
        <Form.Input
          placeholder="Password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e, v) => setPassword(v.value)}
        />
        <Form.Button onClick={login}>Submit</Form.Button>
      </Form>
    </Container>
  );
}

export default Login;
