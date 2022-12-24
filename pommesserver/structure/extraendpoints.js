const Express = require("Express");
const express = Express();
const path = require("path");
const serverconfig = require("../config/serverconfig.json");
const functions = require("./functions.js")

express.get('/cdn/website/favicon', (req, res)=>{
    res.sendFile(path.join(__dirname,'/../web/images/favicon.png'))
})

express.get('/images/bg.jpg', (req, res)=>{
    res.sendFile(path.join(__dirname,'/../web/images/bg.jpg'))
})

express.get('/css/bootstrap.css', (req, res)=>{
    res.sendFile(path.join(__dirname,'/../web/css/bootstrap.css'))
})

express.get('/css/style.css', (req, res)=>{
    res.sendFile(path.join(__dirname,'/../web/css/style.css'))
})

express.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/'))
})


module.exports = express;