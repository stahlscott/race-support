import React, { useEffect, useState } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import { getAllEvents, setActiveEvent, syncToBikeReg } from '../../api/events';
import { paths } from '../../routes';

import AdminHeader from '../../components/admin-header/admin-header';
import Loading from '../../components/loading/loading';
import Selector from '../../components/selector/selector';

import './change-event.css';

function ChangeEvent() {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState({});
  const [selectedEventId, setSelectedEventId] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      const ordered = events
        .sort((a, b) => a.name - b.name)
        .map(event => (event.active ? (event = { ...event, name: `${event.name} // Active` }) : event));
      setEvents(ordered);
      const activeEvent = events.filter(event => event.active)[0];
      setActiveEvent(activeEvent);
      setSelectedEventId(activeEvent.id);
    };
    fetchEvents();
  }, []);

  if (!events.length) return <Loading />;

  return (
    <Container className="container">
      <AdminHeader active={paths.eventManagement} />
      <p />
      <Selector
        values={events}
        display={rider => rider.name}
        placeholder="Select active event"
        selectedId={selectedEventId}
        onClick={eventId => setSelectedEventId(eventId)}
      />
      <p />
      <Button
        negative
        onClick={() => changeActive(selectedEventId, () => setSelectedEventId(activeEvent.id))}
        disabled={selectedEventId === activeEvent.id || selectedEventId === ''}
      >
        Change Active
      </Button>
      <Button negative onClick={() => syncActiveToBikeReg(activeEvent)} disabled={selectedEventId !== activeEvent.id}>
        Re-Sync from BikeReg
      </Button>
    </Container>
  );
}

function changeActive(selectedEventId, resetActive) {
  if (window.confirm(`Are you sure you want to change the active event?`)) {
    setActiveEvent(selectedEventId);
    toast.success('Active event changed', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  } else {
    resetActive();
  }
}

function syncActiveToBikeReg(activeEvent) {
  if (
    window.confirm(
      `Are you sure you want to re-sync ${activeEvent.name}? ` +
        `This will reset all data (new registrations, check-ins) associated with this event.`
    )
  ) {
    syncToBikeReg(activeEvent.id);
    toast.success('Synced', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
}

export default ChangeEvent;
