'use strict'

const express = require('express');
var router = express.Router();
const Book = require('../controller');


router.get('/', Book.list, Book.one)

module.exports = router;
