const logger = require("./Logger").default;
//console.log(logger);
//logger("sayHello");

const path = require("path");
const pathObj = path.parse(__filename);
//console.log(pathObj)

const os = require("os");

const totalMemory = os.totalmem()
const freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory / (1024 * 1024 * 1024)} GB`);
// console.log(`Free Memory ${freeMemory / (1024 * 1024 * 1024)} GB`);

const fileSystem = require("fs");

//Synchronus file access
const files = fileSystem.readdirSync('./');

//Asynchronus File Access
const filesAsyn = fileSystem.readdir('./',function(error, result){
    if (error) {
        console.log(error);
        return;
    }
    console.log(result);
});

//console.log(files);