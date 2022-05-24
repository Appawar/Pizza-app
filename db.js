const mongoose = require ("mongoose");

var mongoURL = 'mongodb+srv://abhay:Abhay12345@cluster0.c1cym.mongodb.net/mernpizza'
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , () => {
    console.log ('Mongo DB Connection Succcesfull');

})

db.on('error' , () => {
    console.log ('Mongo DB Connection Failed');

})

module.exports =mongoose