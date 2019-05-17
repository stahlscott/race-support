import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Segment } from 'semantic-ui-react';

import { getAllRaces } from '../../api/races';
import { getAllRiders, getRider } from '../../api/riders';

import RegistrationForm from '../../components/registration-form/registration-form';
import Loading from '../../components/loading/loading';
import Selector from '../../components/selector/selector';

import './change-event.css';

function ChangeEvent() {
  const [riders, setRiders] = useState([]); // for dropdown select
  const [races, setRaces] = useState({}); // for edit screen dropdown
  const [rider, setRider] = useState({}); // for edit screen

  const fetchRiders = async () => {
    const riders = await getAllRiders();
    const ordered = riders.sort((a, b) => a.name - b.name);
    setRiders(ordered);
  };

  useEffect(() => {
    const fetchRaces = async () => {
      const races = await getAllRaces();
      const ordered = races.sort((a, b) => a.name - b.name);
      setRaces(ordered);
    };
    fetchRiders();
    fetchRaces();
  }, []);

  const fetchRider = async riderId => {
    const rider = riderId ? await getRider(riderId) : {};
    setRider(rider);
  };

  if (!riders.length || !races.length) return <Loading />;

  return (
    <Container className="container">
      <Breadcrumbs />
      <p />
      <Selector
        values={riders}
        display={rider => rider.name}
        placeholder="Select rider"
        selectedId={rider.id || ''}
        onClick={fetchRider}
      />
      <Segment>
        <RegistrationForm
          selectedRider={rider}
          races={races}
          onCancel={() => {
            setRider({});
            fetchRiders();
          }}
        />
      </Segment>
    </Container>
  );
}

function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Section>
        <Link to="">Home</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>
        <Link to="/checkin">Check-In</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>Change Active Event</Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default ChangeEvent;
