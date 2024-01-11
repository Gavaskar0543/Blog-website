const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogWebsite', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connecting error:'));
db.once('open',()=>{
   console.log('mongodb connected succesfully!');
})

module.exports = db;