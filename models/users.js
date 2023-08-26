const mongoose = require('mongoose');

const user_schema = new mongoose.Schema(
    {
        id: String,
        name: String, 
        email: String,
        password: String, 
        createOn:{type: String, default: Date.now}
    }
);
module.exports = mongoose.model('users', user_schema);