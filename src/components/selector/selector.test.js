import React from 'react';
import { render } from 'react-testing-library';
import Selector from './selector';

test('renders without crashing', () => {
  const mockValues = [{ id: 1, name: 'test' }, { id: 2, name: 'test' }];
  render(<Selector values={mockValues} display={obj => obj.name} />);
});
