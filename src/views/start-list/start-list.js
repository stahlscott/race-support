import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Loader } from 'semantic-ui-react';

import { getRidersByRace, getRace } from '../../api/api';

import RiderTable from '../../components/rider-table/rider-table';

import './start-list.css';

function StartList({ match }) {
  const [riders, setRiders] = useState([]);
  const [race, setRace] = useState({});

  useEffect(() => {
    const fetchRiders = async () => {
      const riders = match.params ? await getRidersByRace(match.params.id) : {};
      const ordered = riders.sort((a, b) => a.bib - b.bib);
      setRiders(ordered);
    };

    const fetchRace = async () => {
      const race = match.params ? await getRace(match.params.id) : {};
      setRace(race);
    };
    fetchRiders();
    fetchRace();
  }, [match]);

  if (!match || !race.name) return <Loader />;

  return (
    <Container className="container">
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link to="">Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>{race.name}</Breadcrumb.Section>
      </Breadcrumb>
      <RiderTable riders={riders} />
    </Container>
  );
}

export default StartList;
