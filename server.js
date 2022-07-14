//database
require('./config/database').connect();
require('dotenv').config();

//routes
const users = require('./routes/User.routes');

//app
const express = require('express');
const app = express();
const port = 5000;

//bodyParser
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/api/v1/users', users);

app.listen(port, () => console.log(`Listening on port ${port}`));

