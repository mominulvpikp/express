
require('dotenv').config();

const app = {
    db:{
        db_url : process.env.DB
    },
    port: process.env.PORT
}
module.exports = app;