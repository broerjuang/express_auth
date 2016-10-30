'use strict'
//const data = require('./data')
const data = require('./models/user')

let Book = {
  create : (req, res) => {
    data.create({
      id    : data.length,
      title : req.params.title,
      price : 100
    }, (err, input) => {
      err ? console.error(err) : console.log(input);
    })
  },

  list : (req, res) => {
    data.find({}, (data) => {
      res.json(data);
    })
    //res.send(data.map(book => book.title))
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
