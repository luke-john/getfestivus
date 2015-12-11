import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class Default extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = (
      <div>
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
    return (
      <div>
        <Header />
        <ReactCSSTransitionGroup
          component='div'
          transitionName='page-transition'
          transitionEnterTimeout={50}
          transitionLeaveTimeout={30}>
          {React.cloneElement(children || <div />, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
};
