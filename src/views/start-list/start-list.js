import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

import Rider from '../../components/rider/rider';

import { getRidersByRace } from '../../api/api';

function StartList({ match }) {
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    const fetchRiders = async () => {
      const riders = match.params ? await getRidersByRace(match.params.id) : {};
      setRiders(riders);
    };
    fetchRiders();
  }, [match]);

  if (!match || !riders) return <div />;

  return (
    <Container>
      {riders.map((rider, index) => (
        <Rider key={index} rider={rider} />
      ))}
    </Container>
  );
}

export default StartList;
