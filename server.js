'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
let bookTitle;

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {

  response.send('test request received')

})

// Routes:

app.get ('/books', handleBooks)


// handler funcions:

function handleBooks(req, res) {
  
  BookModel.find({}, (error, book) => {
  if (error) console.log('error found', error)
  else res.send(book)
  })
  }

    

// mongodb://localhost:27017
// Database Code:
// connecting my express server with the mongodb server using mongoose:
mongoose.connect('mongodb+srv://19982014321:19982014321@cluster0.ozeoniu.mongodb.net/?retryWrites=true&w=majority', {

  useUnifiedTopology: true
});

// create schema for the data that I want to store in the database:
const booksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  image: String,
})

// create a model for the data that I want to store in the database.
const BookModel = mongoose.model('FavBooks', booksSchema);

const muqaddimah = new BookModel ({
  title: 'Al Muqaddimah',
  description: 'The Muqaddimah, also known as the Muqaddimah of Ibn Khaldun or Ibn Khaldun Prolegomena, is a book written by the Arab historian Ibn Khaldun in 1377 which records an early view of universal history.',
  status: 'available',
  image:'https://upload.wikimedia.org/wikipedia/ar/3/3a/Muqadimat_ibn_khaldun.jpg'

})

const legacy  = new BookModel ({
  title: 'The Legacy of Muslim Spain',
  description: 'The civilization of medieval Muslim Spain is perhaps the most brilliant and prosperous of its age and has been essential to the direction which civilization in medieval Europe took. This volume is the first ever in any language to deal in a really comprehensive manner with all major aspects of Islamic civilization in medieval Spain.',
  status: 'available',
  image:'https://images-na.ssl-images-amazon.com/images/I/81+28yiqCVL.jpg'

})


const fateOfEmpires = new BookModel ({
  title: 'Fate of Empires',
  description: 'The book is dedicated to the subject of power, how different nations in different conditions managed to create mighty empires ',
  status: 'available',
  image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552424011l/6177860._SX318_.jpg'

})

// save the book in the database.

muqaddimah.save();
legacy.save();
fateOfEmpires.save();

console.log(fateOfEmpires.title)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
