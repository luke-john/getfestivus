import React from 'react';
import Icon from 'react-fa';
import {LinkContainer} from 'react-router-bootstrap';
import {Grid, Jumbotron, ButtonToolbar,
  Button, Row, Col} from 'react-bootstrap';
import Timeline from 'react-embedded-twitter-timeline';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col xs={1}>
              <img
                src='/images/Festivus_Pole.png'
                style={{maxHeight: '200px'}} />
            </Col>
            <Col xs={11}>
              <h1>
                Happy Festivus
              </h1>
              <ButtonToolbar>
                <LinkContainer to='/air-grievance'>
                  <Button bsStyle='success'>
                    Air a Grievance
                  </Button>
                </LinkContainer>
                <LinkContainer to='/festivus-miracles'>
                  <Button bsStyle='danger'>
                    Festivus Miracles
                  </Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
          </Row>
        </Jumbotron>
        <div className='text-center'>
          <Timeline widgetId='675182669991387137' />
        </div>
      </Grid>
    );
  }
};
