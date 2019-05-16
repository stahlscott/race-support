import React from 'react';
import { render } from 'react-testing-library';
import RiderTable from './rider-table';

test('renders without crashing', () => {
  const mockRiders = [{ name: 'hi' }];
  render(<RiderTable riders={mockRiders} />);
});
