import path from 'path';
import fs from 'fs';
import template from '../../frontend/src/index.html';
import drawImage from '../../lib/draw-grievance.js';
import Canvas from 'canvas';

export const standard = (req, res, next) => res.sendFile(
  path.resolve(__dirname, '../../frontend/dist/', 'index.html')
);

export const grievance = (req, res, next) => res
  .send(template(Object.assign(req.query, {
    url: `/grievance.jpg${req.originalUrl.slice(10)}`
  })));

const base64Data = data => data.replace(/^data:image\/png;base64,/, '');

export const image = (req, res, next) => {
  const canvas = drawImage({
    canvas: new Canvas(),
    intro: `Isn't it ${req.query.qualifier}`,
    grievance: req.query.grievance,
    image: Canvas.Image
  });
  res.set('Content-Type', 'image/png');
  res.send(canvas.toBuffer());
};
