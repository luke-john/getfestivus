import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {IndexLink} from 'react-router';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to='/'>
          getfestivus
        </IndexLink>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);
