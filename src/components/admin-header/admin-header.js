import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Grid } from 'semantic-ui-react';

import { paths } from '../../routes';
import { AuthContext, types } from '../../auth';

function AdminHeader({ active }) {
  const auth = useContext(AuthContext);
  const logout = () => auth.dispatch({ type: types.logout });

  return (
    <Grid>
      <Grid.Row columns={12}>
        <Grid.Column floated="left" width={9}>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to="">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              {active === paths.registration ? (
                'Rider Registration'
              ) : (
                <Link to={paths.registration}>Rider Registration</Link>
              )}
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
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <Button floated="right" onClick={logout}>
            Log Out
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default AdminHeader;
