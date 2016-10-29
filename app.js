'use strict'

//----------------------------------------------------------------------------
// Node Modules
//----------------------------------------------------------------------------

// Express Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// initiate express
const app = express();
const router = express.Router();

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

router.get('/ping', (req, res) => {
  res.json(Book);
});

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
