import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Grid, PageHeader, Row, Col, Input, ButtonInput} from 'react-bootstrap';

import GrievanceDisplay from 'components/GrievanceDisplay/index.jsx';

export default class AddGrievance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grievance: `@triplej censored Taylor Swift from the Hottest 100.`,
      qualifier: 'disappointing'
    };
  }
  render() {
    const grievanceUrl = `\
/grievance?\
grievance=${this.state.grievance}&\
qualifier=${this.state.qualifier}`;
    return (
      <Row>
        <Col sm={5} smPush={7}>
          <GrievanceDisplay
            {...this.state} />
        </Col>
        <Col sm={7} smPull={5}>
          <form className='form-horizontal'>
            <Input
              labelClassName='col-xs-3'
              wrapperClassName='col-xs-8'
              type='select'
              onChange={(event) => this.setState({
                qualifier: event.currentTarget.value
              })}
              label={'You\'re'}>
              <option value='disappointing'>Disappointed</option>
              <option value='angering'>Angry</option>
              <option value='saddening'>Sad</option>
            </Input>
            <Input
              type='textarea'
              label='That'
              placeholder={this.state.grievance}
              maxLength={103}
              value={this.state.grievance}
              onChange={(event) => this.setState({
                grievance: event.currentTarget.value
              })}
              labelClassName='col-xs-3'
              wrapperClassName='col-xs-8' />
            <LinkContainer to={grievanceUrl}>
              <ButtonInput
                className='col-xs-8 col-xs-offset-3'
                type='submit'
                value='Air Grievance' />
            </LinkContainer>
          </form>
        </Col>
      </Row>
    );
  }
}
