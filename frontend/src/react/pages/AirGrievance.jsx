import React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';

import AddGrievance from 'components/AddGrievance/index.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <PageHeader>
          Airing of Grievances
        </PageHeader>
        <p className='lead'>
          Help celebrate Festivus and share in the "Airing of Greivances".
          It's an opportunity to tell the world about the things that
          dissapointed you in the past year.
        </p>
        <AddGrievance />
      </Grid>
    );
  }
};
