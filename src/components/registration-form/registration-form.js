import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import RaceSelect from '../race-select/race-select';
import { updateRider, createRider } from '../../api/api';

const defaultRider = {
  name: '',
  email: '',
  usac: '',
  bib: '',
  raceId: '',
  checkedIn: false,
};

function RegistrationForm({ selectedRider, races, onCancel }) {
  const [rider, setRider] = useState(selectedRider.id ? selectedRider : defaultRider);

  useEffect(() => {
    setRider(selectedRider.id ? selectedRider : defaultRider);
  }, [selectedRider]);

  console.log(rider);

  const { name, email, usac, bib, raceId, checkedIn } = rider;

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e, v) => setRider({ ...rider, name: v.value })}
        />
        <Form.Input
          fluid
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e, v) => setRider({ ...rider, email: v.value })}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          type="number"
          label="USAC #"
          placeholder="USAC #"
          value={usac}
          onChange={(e, v) => setRider({ ...rider, usac: v.value })}
        />
        <Form.Input
          fluid
          type="number"
          label="Bib #"
          placeholder="Bib #"
          value={bib}
          onChange={(e, v) => setRider({ ...rider, bib: v.value })}
        />
      </Form.Group>
      <RaceSelect races={races} value={raceId} onClick={raceId => setRider({ ...rider, raceId })} />
      <p />
      <Form.Checkbox
        checked={checkedIn}
        onChange={() => setRider({ ...rider, checkedIn: !checkedIn })}
        label="Checked In"
      />
      <Form.Group>
        <Form.Button
          disabled={!rider.name || !rider.email || !rider.usac || !rider.bib || !rider.raceId}
          primary
          onClick={async () => {
            await submit(rider);
            onCancel();
          }}
        >
          Submit
        </Form.Button>
        <Form.Button onClick={onCancel}>Cancel</Form.Button>
      </Form.Group>
    </Form>
  );
}

async function submit(rider) {
  const response = rider.id ? await updateRider(rider) : await createRider(rider);
  console.log(response);
  toast.success('Submitted', {
    position: toast.POSITION.BOTTOM_CENTER,
  });
}

export default RegistrationForm;
