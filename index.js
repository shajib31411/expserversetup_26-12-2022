const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');
const validator = require('validator');
const helmet = require('helmet');



//MIDDLEWARE

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(cors());

// mongodb connect
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017');
    console.log('db connceted');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = 8000;
app.listen(port,() => {
    console.log(`app running success ${port}`);

});
