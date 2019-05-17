import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

import { paths } from '../../routes';

function AdminHeader({ active }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Section>
        <Link to="">Home</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>
        {active === paths.registration ? 'Rider Registration' : <Link to={paths.registration}>Rider Registration</Link>}
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>
        {active === paths.eventManagement ? (
          'Event Management'
        ) : (
          <Link to={paths.eventManagement}>Event Management</Link>
        )}
      </Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default AdminHeader;
