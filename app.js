'use strict'

//----------------------------------------------------------------------------
// Node Modules
//----------------------------------------------------------------------------

// Express Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pug = require('pug');

// initiate express
const app = express();
const router = express.Router();

// set view engine
app.set('views', './views');
app.set('view engine', 'pug');

//----------------------------------------------------------------------------
// App Configuration
//----------------------------------------------------------------------------

// initiate body parser to express
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

const Book = require('./data');

//----------------------------------------------------------------------------
// Routing
//----------------------------------------------------------------------------
const book = require('./data');

router.get('/', (req, res) => {
  //res.send('pug')
  res.render('index', {title : book[0].title})
})

//----------------------------------------------------------------------------
// Register Routes
//----------------------------------------------------------------------------

app.use('/', router);

//----------------------------------------------------------------------------
// Run the app
//----------------------------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server is running on port ', port );
})
