import React from 'react';
import { render } from 'react-testing-library';
import RiderSelect from './rider-select';

test('renders without crashing', () => {
  const mockRiders = [{ name: 'hi', id: 1 }];
  render(<RiderSelect riders={mockRiders} />);
});
