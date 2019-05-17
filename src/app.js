import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Segment } from 'semantic-ui-react';

import { getAllEvents, getAllRaces } from './api/api';

import Loading from './components/loading/loading';

import './app.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({ name: '...' }); // for edit screen dropdown
  const [races, setRaces] = useState([]); // for edit screen dropdown

  useEffect(() => {
    const fetchRaces = async () => {
      const races = await getAllRaces();
      const ordered = races.sort((a, b) => a.name - b.name);
      setRaces(ordered);
      setLoading(false);
    };

    const fetchActiveEvent = async () => {
      const events = await getAllEvents();
      setEvent(events.filter(event => event.active)[0]);
    };

    fetchRaces();
    fetchActiveEvent();
  }, []);

  if (loading) return <Loading />;

  return (
    <Container className="container">
      <Grid>
        <Grid.Column width={14}>
          <h1>Race Support / {event.name}</h1>
        </Grid.Column>
        <Grid.Column width={2}>
          <Link to="/checkin">Checkin</Link>
        </Grid.Column>
      </Grid>
      {races.map((race, index) => (
        <Link key={index} to={`/start/${race.id}`} className="listItem">
          <Segment>{race.name}</Segment>
        </Link>
      ))}
    </Container>
  );
}

export default App;
