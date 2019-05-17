import React from 'react';
import { render } from 'react-testing-library';
import Loading from './loading';

test('renders without crashing', () => {
  render(<Loading />);
});
