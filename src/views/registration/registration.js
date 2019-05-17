import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import { getAllRaces } from '../../api/races';
import { getAllRiders, getRider } from '../../api/riders';
import { paths } from '../../routes';

import AdminHeader from '../../components/admin-header/admin-header';
import RegistrationForm from '../../components/registration-form/registration-form';
import Loading from '../../components/loading/loading';
import Selector from '../../components/selector/selector';

import './registration.css';

function Registration() {
  const [riders, setRiders] = useState([]);
  const [races, setRaces] = useState({});
  const [rider, setRider] = useState({});

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
      <AdminHeader active={paths.registration} />
      <p />
      <Selector
        values={riders}
        display={rider => `${rider.name} // ${rider.raceName}`}
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

export default Registration;
