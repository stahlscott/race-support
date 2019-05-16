import React from 'react';
import { Table } from 'semantic-ui-react';

function RiderTable({ riders }) {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Bib #</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>???</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {riders.map((rider, index) => (
          <Table.Row key={index}>
            <Table.Cell>{rider.bib}</Table.Cell>
            <Table.Cell>{rider.name}</Table.Cell>
            <Table.Cell>{rider.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default RiderTable;
