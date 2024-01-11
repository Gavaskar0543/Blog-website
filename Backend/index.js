const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World');
    });
const port = 8000;
const db = require('./Config/mongoose');
server.listen(port,(error)=>{
    if(error){
        console.log(error.message);
        return;
    }
    console.log(`Server up on port:${port}`)
});