const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://demoTester:A123456@cluster0.zo320.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0') // Add your own cluster or use this restricted one
    .then(() => { console.log("Database is connected!"); })
    .catch((err) => { console.log(err); })
