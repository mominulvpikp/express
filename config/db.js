const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.db_url).
then(()=>{
    console.log('Mongoose Connect')
}).
catch((err)=>{ 
    console.log(err)
    process.exit(1) 
});