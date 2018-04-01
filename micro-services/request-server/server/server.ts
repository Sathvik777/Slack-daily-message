import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

import * as homeController from './controllers/home';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
  app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

/**
  POST endpoint takes Json Request body with message, time/date and channel ID.
*/
app.post("/schedule_it",  (request, response, next) => {
 //TODO: add auth here

 // TODO: Insert in DB
 
 
 response.send("OK");
});


module.exports = app;
