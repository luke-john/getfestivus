import React from 'react';
import Icon from 'react-fa';
import {Grid, Row, Col} from 'react-bootstrap';

export default () => (
  <Grid>
    <Row>
      <Col sm={8}>
        <blockquote style={{
            padding: '1.5px 15px'
          }}>
          <p style={{
              margin: '0'
            }}>
            A Festivus for the rest of us!
          </p>
          <footer>
            Frank Costanza in <cite title='Seinfield'>Seinfield</cite>
          </footer>
        </blockquote>
      </Col>
      <Col sm={4} className='text-right'>
        <ul className='list-unstyled'>
          <li>
            <a href='https://github.com/luke-john/getfestivus'>
              <Icon name={'github'} />
              &nbsp;
              Github
            </a>
          </li>
          <li>
            <a href='https://twitter.com/getfestivus'>
              <Icon name={'twitter'} />
              &nbsp;
              Twitter
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Grid>
);
