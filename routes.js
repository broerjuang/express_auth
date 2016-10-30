'use strict'

let Book = {

  list : (req, res) => {
    res.send('book list')
  },

  get : (req, res) => {
    res.send('book' + req.params.id)
  },

  delete : (req, res) => {
    res.send('delete book')
  },

  find : (req, res) => {
    res.send()
  }
}

module.exports = Book
