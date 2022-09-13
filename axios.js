const axios = require('axios');
const http= require("http");
axios
  .get('https://dummyapi.io/data/v1/user?limit=10/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

  const options = {
    port: 443,
    host: '127.0.0.1',
    method: 'GET',
    path: 'www.dummyapi.io'
  };

  const req = http.request(options,res =>{
    console.log('statusCode:',res.statusCode);
  
    res.on('data', d => {
        process.stdout.write(d);
  });
})
.on('error', error => {
    console.error(error);
  });
  req.end();
  
