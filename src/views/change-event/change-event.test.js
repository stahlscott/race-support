import React from 'react';
import { render } from 'react-testing-library';
import ChangeEvent from './change-event';

test('renders without crashing', () => {
  render(<ChangeEvent />);
});
