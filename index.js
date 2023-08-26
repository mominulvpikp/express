const my_server = require('./app');
const config = require('./config/config');
const port = config.port;

my_server.listen(port, ()=>{
    console.log(`Your server is rouning on http://localhost:${port}`);
});