import React from 'react';
import { render } from 'react-testing-library';
import AdminHeader from './admin-header';

test('renders without crashing', () => {
  render(<AdminHeader />);
});
