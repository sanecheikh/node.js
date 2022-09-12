//console.log(process.argv);
//console.log(processargv.slice(2)[0].split("=")[1]);
const minimist = require("minimist");
const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);
console.log(argNew.prenom);