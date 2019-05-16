import React from 'react';
import { render } from 'react-testing-library';
import RaceSelect from './race-select';

test('renders without crashing', () => {
  const mockRaces = [{ name: 'fake race 1', id: 1 }];
  render(<RaceSelect races={mockRaces} />);
});
