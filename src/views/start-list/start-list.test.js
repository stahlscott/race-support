import React from 'react';
import { render } from 'react-testing-library';
import StartList from './start-list';

test('renders without crashing', () => {
  render(<StartList />);
});
