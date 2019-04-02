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


const Logger = require("./logger");
const logger = new Logger();
logger.log("hello");
logger.on("messageLogged", (response) => {
    console.log("Message Logged Successfully");
    console.log(response);
})


const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("hello world");
        res.end();
    }

    if (req.url === "/books/") {
        res.write(JSON.stringify(["Harry Potter", "Rework", "Narnia"]));
        res.end();
    }
});
// server.on("connection", (socket) => {
//     console.log("Hello World");
// })
server.listen(3000);
console.log("Server is listening on 3000");