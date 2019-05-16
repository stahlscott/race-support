import React from 'react';
import { render } from 'react-testing-library';
import Rider from './rider';

test('renders without crashing', () => {
  const mockRider = { name: 'hi' };
  render(<Rider rider={mockRider} />);
});
