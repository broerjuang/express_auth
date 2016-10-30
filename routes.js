'use strict'
const data = require('./data')

let Book = {

  list : (req, res) => {
    res.send(data.map(book => book.title))
  },

  get : (req, res) => {
    res.send(data.filter(x => x.id == req.params.id))
  },

  delete : (req, res) => {
    res.send('delete book')
  },

  find : (req, res) => {
    res.send()
  }
}

module.exports = Book
