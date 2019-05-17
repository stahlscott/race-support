import React from 'react';
import { render } from 'react-testing-library';
import Registration from './registration';

test('renders without crashing', () => {
  render(<Registration />);
});
