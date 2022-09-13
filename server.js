const http= require("http");
require('dotenv').config();
//const port = 5000;
const port =process.env.PORT || 5000;
//const server = http.createServer(( req, res)=>{
    //res.statusCode = 200
    //res.setHeader('Content-Type','text/html')
   // res.end('<h1>welcom to node.js server<h1>')
//});
//server.listen(port,() => {
//console.log(`Server lance a l'adresse http://127.0.0.1:${port}`)})

const http = require('http');
const server = http.createServer();

server.listen(5000, 'localhost');                   
server.on('listening', () => { console.log('Serveur démarré !');
});  
server.on('request', (request, response) => {
    const {method, url} = request;
    console.log('URL demandée : %s %s', method, url); 
  
    response.end('Coucou');                           
  });              