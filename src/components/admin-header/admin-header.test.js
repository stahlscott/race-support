import React from 'react';
import { render } from 'react-testing-library';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth';

import AdminHeader from './admin-header';

test('renders without crashing', () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <AdminHeader />
      </BrowserRouter>
    </AuthProvider>
  );
});
