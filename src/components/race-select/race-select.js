import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function RaceSelect({ races, value, onClick }) {
  const raceOptions = races.map(race => ({ key: race.id, value: race.id, text: race.name }));

  return (
    <Dropdown
      placeholder="Select race"
      onChange={(e, v) => onClick(v.value)}
      fluid
      search
      selection
      options={raceOptions}
      value={value}
    />
  );
}

export default RaceSelect;
