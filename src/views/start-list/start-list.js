import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container } from 'semantic-ui-react';

import { getRidersByRace, getRace } from '../../api/races';

import Loading from '../../components/loading/loading';
import RiderTable from '../../components/rider-table/rider-table';

import './start-list.css';

function StartList({ match }) {
  const [loading, setLoading] = useState(true);
  const [riders, setRiders] = useState([]);
  const [race, setRace] = useState({});

  useEffect(() => {
    const fetchRiders = async () => {
      const riders = match.params ? await getRidersByRace(match.params.id) : {};
      const ordered = riders.sort((a, b) => a.bib - b.bib);
      setRiders(ordered);
      setLoading(false);
    };

    const fetchRace = async () => {
      const race = match.params ? await getRace(match.params.id) : {};
      setRace(race);
    };

    fetchRace();
    fetchRiders();
  }, [match]);

  if (!match || loading) return <Loading />;

  return (
    <Container className="container">
      <Breadcrumbs race={race} />
      <RiderTable riders={riders} />
    </Container>
  );
}

function Breadcrumbs({ race }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Section>
        <Link to="">Home</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>{race.name}</Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default StartList;
