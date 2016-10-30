'use strict'

const express = require('express');
var router = express.Router();
const Book = require('../controller');


router.get('/', Book.list);
router.get('/:title', Book.create);

module.exports = router;
