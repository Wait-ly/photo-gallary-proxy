const newrelic = require('newrelic');
const express = require('express');

const app = express();
const port = 3002;

;

app.locals.newrelic = newrelic;
app.use(express.static('public'));
app.use('/:listing/', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));