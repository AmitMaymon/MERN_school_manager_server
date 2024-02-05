const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amitmanx:Aew2009aew@cluster0.ajdwy4s.mongodb.net/studentDB?retryWrites=true&w=majority')
    .then(() => { console.log("Database is connected!"); })
    .catch((err) => { console.log(err); })