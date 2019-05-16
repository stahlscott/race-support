import React from 'react';
import { render } from 'react-testing-library';
import RegistrationForm from './registration-form';

test('renders without crashing', () => {
  render(<RegistrationForm selectedRider={{}} races={[]} />);
});
