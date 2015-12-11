import express from 'express';
import path from 'path';
import logger from 'morgan';

import {notFound, error} from './responses/errors';

import {standard, grievance, image} from './responses';

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(['/assets', '/vendor', '/stylesheets'], notFound);
app.use('/grievance.png', image);
app.use('/grievance', grievance);
app.use('/', standard);
app.use(notFound);
app.use(error);

module.exports = app;
