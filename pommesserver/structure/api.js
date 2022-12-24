const Express = require("express");
const express = Express.Router();
const functions = require("./functions.js");

express.get("/api", (req, res)=>{
    res.sendStatus(200) // connected to API
})

express.get("/api/version", async(req, res)=>{
    res.json({
        "VERSION-INFO":"Current Version: V2.0.7 Prod. (pommes-serverV2)(Build Release at: {NO DATE})"
    })
})

express.get("/api/ip", (req, res)=>{
    /*
    soon :>
    */
})


// add pinging 
// add no ssl pinging




functions.modulelog(`API got successful started`)
module.exports = express;