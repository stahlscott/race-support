import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Segment, Image } from 'semantic-ui-react';

import { getAllEvents, getRacesByEvent } from './api/events';
import { paths } from './routes';

import Loading from './components/loading/loading';

import cyclist from './cyclist.png';
import './app.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({ name: '...' }); // for edit screen dropdown
  const [races, setRaces] = useState([]); // for edit screen dropdown

  useEffect(() => {
    const fetchActiveEvent = async () => {
      const events = await getAllEvents();
      const activeEvent = events.filter(event => event.active)[0];
      setEvent(activeEvent);
      fetchRaces(activeEvent.id);
    };

    const fetchRaces = async eventId => {
      const races = await getRacesByEvent(eventId);
      const ordered = races.sort((a, b) => a.name - b.name);
      setRaces(ordered);
      setLoading(false);
    };

    fetchActiveEvent();
  }, []);

  if (loading) return <Loading />;

  return (
    <Container className="container">
      <MainHeader event={event} />
      {races.map((race, index) => (
        <Link key={index} to={`${paths.start}/${race.id}`} className="listItem">
          <Segment>{race.name}</Segment>
        </Link>
      ))}
    </Container>
  );
}

function MainHeader({ event }) {
  return [
    <Grid key="wide" className="mainHeader">
      <Grid.Column width={14}>
        <h1>
          <Image src={cyclist} size="mini" inline /> {event.name}
        </h1>
      </Grid.Column>
      <Grid.Column width={2}>
        <Link to={paths.registration}>
          <Button>Admin</Button>
        </Link>
      </Grid.Column>
    </Grid>,
    <Grid key="small" className="responsiveHeader">
      <h1>
        <Image src={cyclist} size="mini" inline /> {event.name}
      </h1>
      <p />
    </Grid>,
  ];
}

export default App;
