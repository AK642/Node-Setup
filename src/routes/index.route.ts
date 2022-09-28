import express from 'express';
import sampleRoute from './sample.route';

const app = express();
app.use('/sample', sampleRoute);

export default app;