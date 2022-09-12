//const fs = require("fs");
//const path = require("path");

//const fileName = path.join(__dirname,'sample.json');

//console.log(fileName);
//fs.readFile(fileName,(err, contenue ) => {
   // console.log(String(contenue))
//})
const {readdir}=require('fs');
readdir('.',(error ,files) => console.log(files));