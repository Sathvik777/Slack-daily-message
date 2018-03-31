"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const homeController = require("./controllers/home");
dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);
app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});
module.exports = app;
//# sourceMappingURL=server.js.map