import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

export default class Miracles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Miracles</h1>
        </Jumbotron>
      </Grid>
    );
  }
};
