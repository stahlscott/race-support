import React from 'react';
import { render } from 'react-testing-library';
import CheckIn from './check-in';

test('renders without crashing', () => {
  render(<CheckIn />);
});
