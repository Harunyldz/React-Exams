var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');






/****************************************************************************************** */

const mongoose = require('mongoose');


const mongoDBURL = 'mongodb://127.0.0.1:27017/';
const mongoDBName = 'NewDB';


mongoose.connect(mongoDBURL + mongoDBName).then(() => {
  // mongoose.connect('mongodb://127.0.0.1:27017/NewDB').then(()=>{
  console.log('NewDB Connected')
})
  .catch((err) => {
    console.log('NewDB Connection Failed', err)
  });


const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  userID: Number,
  id: Number,
  title: String,
  name: String
})


const GalleryModel = mongoose.model('Gallery', gallerySchema);

const gallery = new GalleryModel({
  userID: 120,
  id: 5,
  title: 'New DB test',
  name: 'NewDB'
})

gallery.save();


//Personel Schema
const personelSchema = new Schema({
  userID: Number,
  name: String,
  surname: String,
  salary: Number
})

const PersonelModel = mongoose.model('Personel', personelSchema);

const addPersonel = (_newPersonel) => {
  const newPersonel = new PersonelModel(_newPersonel);
  newPersonel.save();

}

addPersonel({
  userID: 1,
  name: 'Patates',
  surname: 'Soğan',
  salary: 10000
})
addPersonel({
  userID: 2,
  name: 'Biber',
  surname: 'Patlıcan',
  salary: 15000
})
addPersonel({
  userID: 3,
  name: 'Kabak',
  surname: 'Salatlık',
  salary: 18000
})
// const personel1 = new PersonelModel({
//   userID: 1,
//   name: 'Patates',
//   surname: 'Soğan',
//   salary: 10000
// })
// const personel2 = new PersonelModel({
//   userID: 2,
//   name: 'Biber',
//   surname: 'Patlıcan',
//   salary: 15000
// })
// const personel3 = new PersonelModel({
//   userID: 3,
//   name: 'Kabak',
//   surname: 'Salatlık',
//   salary: 18000
// })

// personel1.save();
// personel2.save();
// personel3.save();

//Delete
PersonelModel.deleteOne({ userID: '1' }).then((data) => {
  console.log('Deleted', data)
}).catch((err) => {
  console.log(err)
})
//Update
PersonelModel.updateOne({ userID: '1' }, { name: 'Karnabahar', salary: 250 }).then((data) => {
  console.log('Updated', data)
}).catch((err) => {
  console.log(err)
})
//Read
PersonelModel.find({ userID: '3' }).then((data) => {
  console.log("Read ", data)
}).catch((err) => {
  console.log(err)
})








/********************************************************************************************* */
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
