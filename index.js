const fs = require('fs');
const http = require('http');

//Create a Server
const Server = http.createServer((req,res)=>{
    res.end('Hello from the Server, Jay!');
})


Server.listen(3000, '127.0.0.1', ()=>{
    console.log("Listening to request on port 3000");
})
