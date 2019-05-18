import React from 'react';
import { render } from 'react-testing-library';
import Login from './login';

test('renders without crashing', () => {
  render(<Login />);
});
