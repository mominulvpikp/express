const my_server = require('./app');
require('dotenv').config();
const port = process.env.PORT;

my_server.listen(port, ()=>{
    console.log(`Your server is rouning on http://localhost:${port}`);
});