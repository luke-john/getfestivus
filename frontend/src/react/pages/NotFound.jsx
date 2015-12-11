import React from 'react';
import Icon from 'react-fa';
import {Grid, PageHeader} from 'react-bootstrap';

export default () => (
  <Grid>
    <PageHeader>
      <Icon name='exclamation-triangle' /> Page Not Found <small>404</small>
    </PageHeader>
    <blockquote>
      <p>
        <strong>Frank:</strong> Many Christmases ago, I went to buy a doll for
          my son. I reached for the last one they had, but so did another man.
          As I rained blows upon him, I realized there had to be another way.
      </p>
      <p>
        <strong>Cosmo:</strong> What happened to the doll?
      </p>
      <p>
        <strong>Frank:</strong> It was destroyed. But out of that a new holiday
          was born … a Festivus for the rest of us!
      </p>
      <p>
        <strong>Cosmo:</strong> That must have been some kind of doll.
      </p>
      <p>
        <strong>Frank:</strong> She was.
      </p>
      <footer>
        Frank Costanza and Cosmo Kramer in
        <cite title='Seinfield'>Seinfield</cite>
      </footer>
    </blockquote>
  </Grid>
);
