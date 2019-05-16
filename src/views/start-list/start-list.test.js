import React from 'react';
import { render } from 'react-testing-library';
import StartList from './start-list';

test('renders without crashing', () => {
  const mockParams = { params: { id: 1 } };
  render(<StartList match={mockParams} />);
});

test('renders without crashing without params', () => {
  render(<StartList />);
});
