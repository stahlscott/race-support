import React from 'react';
import { render } from 'react-testing-library';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth';

import Login from './login';

test('renders without crashing', () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </AuthProvider>
  );
});
