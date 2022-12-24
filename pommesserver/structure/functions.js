const Express = require("express");
const express = Express();
const clc = require('cli-color');

// starting moudles
function startmoudles(){
    express.use(require("../web/database/index.js"))
    express.use(require("../web/ServerStatus/index.js"))
    express.use(require("../web/services/index.js"))
}

// closing server
function closeserver(){
    console.log(clc.yellow('Server Closed'))
    process.exit()
}

// server logging
function serverlog(data){
    console.log(`[\x1b[35mServer\x1b[0m] ${data}\x1b[0m`)
}
function errorlog(data){
    console.log(`\x1b[31m[Error]\x1b[0m ${data}\x1b[0m`)
}
function modulelog(data){
    console.log(`[\x1b[35mModule\x1b[0m] ${data}\x1b[0m`)
}
function HTTPLog(data){
    console.log(`[\x1b[35mHTTP\x1b[0m] ${data}\x1b[0m`)
}
function DebugLog(data){
    console.log(`\x1b[31m[DEBUG]\x1b[0m ${data}\x1b[0m`)
}

function pinging(){
    // working on it (other shit is more important)
}

module.exports = {
    //startmoudles,
    closeserver,
    serverlog,
    errorlog,
    modulelog,
    HTTPLog,
    DebugLog,
    pinging
}