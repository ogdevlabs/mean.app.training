const mongoose = require('mongoose');

const mongoDB_Url = process.env.mongoDb_uri;

mongoose.connect(mongoDB_Url);
mongoose.connection.on('connected', ()=> {
    console.log('MongoDB Connected successfully');
});

mongoose.connection.on('error', (err) =>{
    console.log(err);
});
