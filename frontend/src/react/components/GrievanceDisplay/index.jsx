import React from 'react';

import drawGrievance from 'lib/draw-grievance.js';

export default ({grievance, qualifier, affected}) => {
  const intro = `It's ${qualifier} that`;
  const canvas = document.createElement('canvas');
  const image = drawGrievance({canvas, intro, grievance})
    .toDataURL('image/png');
  return (
    <div className='thumbnail'>
      <img
        src={image}
        alt={`${intro} ${grievance}`}
        title={`${intro} ${grievance}`} />
    </div>
  );
};
