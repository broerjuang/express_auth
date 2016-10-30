'use strict'
const data = require('./data')

let Book = {

  list : (req, res, next) => {
    res.send(data.map(book => book.title))
  },

  one : (req, res) => {
    console.log('done');
  },

  get : (req, res) => {
    res.send(data.filter(x => x.id == req.params.id))
  },

  delete : (req, res) => {
    res.send('delete boo')
  },

  find : (req, res) => {
    res.send()
  }
}

module.exports = Book
