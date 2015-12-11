import React from 'react';
import Icon from 'react-fa';
import {TwitterButton, FacebookButton, FacebookCount} from 'react-social';

export default ({qualifier, grievance}) => {
  const intro = `Isn't it ${qualifier}`;
  const message = `${intro} that ${grievance} @getfestivus`;
  const url = `\
http://getfestivus.com/grievance?\
grievance=${encodeURIComponent(grievance)}&\
qualifier=${encodeURIComponent(qualifier)}`;
  const email = `\
mailto:?\
subject=Happy Festivus&\
body=Dear Friend,
%0D%0A%0D%0A
${message}
%0D%0A%0D%0A
Kind Regards,
%0D%0A%0D%0A
sent via [getfestivus](http://getfestivus.com)
%0D%0A
${url}
`;
  return (
    <div>
      Share grievance via
      &nbsp;
      <TwitterButton
        url={url}
        message={message}
        className='btn btn-xs btn-primary'>
        <Icon name='twitter' /> Tweet
      </TwitterButton>
      &nbsp;
      <FacebookButton
        url={url}
        message={message}
        className='btn btn-xs btn-info'>
        <Icon name='facebook' /> Facebook
      </FacebookButton>
      &nbsp;
      <a
        href={email}
        target='_blank'
        className='btn btn-xs btn-default'>
        <Icon name='envelope' /> Email
      </a>
    </div>
  );
};
