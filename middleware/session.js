const session = require("express-session"); 
const configSession = require("../config/configDATA.js"); 

const sessionHandler = session(configSession); 

module.exports = { 
    sessionHandler
}