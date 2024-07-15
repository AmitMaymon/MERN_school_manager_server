const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://schoolAppTester:A123456@cluster0.ajdwy4s.mongodb.net/studentDB?retryWrites=true&w=majority')
    .then(() => { console.log("Database is connected!"); })
    .catch((err) => { console.log(err); })
