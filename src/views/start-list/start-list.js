import React from 'react';
import { Container } from 'semantic-ui-react';

function StartList({ match }) {
  if (!match) return <div />;
  const { id } = match.params;
  return <Container>{id}</Container>;
}

export default StartList;
