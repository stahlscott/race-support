import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function Selector({ values, display, placeholder, selectedId, onClick }) {
  const formattedOptions = values.map(object => ({
    key: object.id,
    value: object.id,
    text: display(object),
  }));

  return (
    <Dropdown
      placeholder={placeholder}
      onChange={(e, v) => onClick(v.value)}
      fluid
      search
      selection
      clearable
      options={formattedOptions}
      value={selectedId}
    />
  );
}

export default Selector;
