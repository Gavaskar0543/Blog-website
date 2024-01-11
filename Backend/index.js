const express = require('express');
const port = 8000;
const server = express();
const db = require('./Config/mongoose');


server.use('/',require('./router'));
server.listen(port,(error)=>{
    if(error){
        console.log(error.message);
        return;
    }
    console.log(`Server up on port:${port}`)
});