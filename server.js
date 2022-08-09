'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {

  response.send('test request received')

})

// Database Code:
// connecting my express server with the mongodb server using mongoose:
mongoose.connect('mongodb://127.0.0.1:27017')

// create schema for the data that I want to store in the database:
const booksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
})

// create a model for the data that I want to store in the database.
const BookModel = mongoose.model('BooksDB', booksSchema);

const fateOfEmpires = new BookModel ({
  title: 'Fate of Empires',
  description: 'The book is dedicated to the subject of power, how different nations in different conditions managed to create mighty empires ',
  status: 'unread'

})

// save the book in the database.
fateOfEmpires.save();

console.log(fateOfEmpires.title)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
