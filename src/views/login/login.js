import React, { useState } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

import './login.css';
import { login, logout, isAuthenticated } from '../../api/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
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
        <Form.Button
          onClick={() => {
            login(username, password);
          }}
        >
          Submit
        </Form.Button>
      </Form>
      <Button onClick={() => logout()}>logout</Button>
      <Button onClick={async () => await isAuthenticated()}>is auth</Button>
    </Container>
  );
}

export default Login;
