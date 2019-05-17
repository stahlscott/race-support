import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Loader, Segment } from 'semantic-ui-react';

import { getAllRaces, getAllRiders, getRider } from '../../api/api';

import RiderSelect from '../../components/rider-select/rider-select';

import './check-in.css';
import RegistrationForm from '../../components/registration-form/registration-form';

function CheckIn() {
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

  if (!riders.length || !races.length) return <Loader />;

  return (
    <Container className="container">
      <Breadcrumb>
        <Breadcrumb.Section>
          <Link to="">Home</Link>
        </Breadcrumb.Section>
      </Breadcrumb>
      <p />
      <RiderSelect riders={riders} value={rider.id || ''} onClick={fetchRider} />
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

export default CheckIn;
