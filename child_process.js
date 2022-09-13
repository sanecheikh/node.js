const {exec} = require('child_process');
const {exec} = require('process');

exec('npm --version', (error, stdout, stderr) => {  
  console.log(`npm version ${stdout.trim()}`);      
});
exec('npm --version', (error, stdout, stderr) => {  
    console.log(`La version de notre ${stdout.trim()}`);      
  });
  
