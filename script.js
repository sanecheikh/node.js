console.log("Node.js");
console.log("Le javascrip cote  server");

//process.exit(1);
process.exitCode = 1;

const repl =require("repl");
const local = repl.start
("$");
local.on ("exit",()=>{ console.log("Sortir de la console !");
process.exit();
})