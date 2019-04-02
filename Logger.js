//Module : Logger - Log Messages
const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        this.emit("messageLogged", message);
        console.log("Message Logged: " + message);
    }
}

module.exports = Logger;