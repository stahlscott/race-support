import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function RiderSelect({ riders, value, onClick }) {
  const riderOptions = riders.map(rider => ({ key: rider.id, value: rider.id, text: `${rider.name}` }));
  // TODO: Add race to display tag as riders can be multiple races
  return (
    <Dropdown
      placeholder="Select rider"
      onChange={(e, v) => onClick(v.value)}
      fluid
      search
      selection
      clearable
      options={riderOptions}
      value={value}
    />
  );
}

export default RiderSelect;
