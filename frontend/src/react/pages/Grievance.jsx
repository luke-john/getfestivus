import React from 'react';
import {Grid, PageHeader, Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import GrievanceDisplay from 'components/GrievanceDisplay/index.jsx';
import ShareGrievance from 'components/ShareGrievance/index.jsx';

export default class Grievance extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      grievance=`@triplej censored Taylor Swift from the Hottest 100.`,
      qualifier='disappointing'
    } = this.props.location.query;
    return (
      <Grid>
        <Row>
          <Col sm={5}>
            <GrievanceDisplay
              grievance={grievance}
              qualifier={qualifier} />
          </Col>
          <Col sm={7}>
            <ShareGrievance
              grievance={grievance}
              qualifier={qualifier} />
            <br />
            <LinkContainer to='/air-grievance'>
              <Button bsSize={'xs'}>
                Share your own grievance
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
};
