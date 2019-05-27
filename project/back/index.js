const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const checkToken = require('./middlewares/check-token.middleware')

const app = express();


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 8000;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

//Routes
var authRouter = require('./routes/auth.routes');
var apiRouter = require('./routes/api.routes');



app.use('/auth', authRouter);

app.use('/api', checkToken, apiRouter);


// Models
require('./models/user.model');

var db = mongoose.connection;
db.on('error', () => console.log('connection error'));
db.once('open', function () {
  // we're connected!
  console.log('Connected');

});



app.listen(port, () => {
  console.log('We are live on ' + port);
});

