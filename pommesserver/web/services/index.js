const Express = require("express");
const express = Express();
const path = require("path");
const serverconfig = require("../../config/serverconfig.json");
const functions = require("../../structure/functions.js")


// not the best but it works good enough
express.get("/services", (req, res)=>{
    if(serverconfig.Services.LawinServer.Online == true){
        if(serverconfig.Services.FortXMPP.Online == true){
            res.sendFile(path.join(__dirname, "/services/html/page1.html"))
        }
    }
    if(serverconfig.Services.LawinServer.Online == true){
        if(serverconfig.Services.FortXMPP.Online == false){
            res.sendFile(path.join(__dirname,"/services/html/page2.html"))
        }
    }
    if(serverconfig.Services.FortXMPP.Online == true){
        if(serverconfig.Services.LawinServer.Online == false){
            res.sendFile(path.join(__dirname, "/services/html/page3.html"))
        }
    }
    if(serverconfig.Services.LawinServer.Online == false){
        if(serverconfig.Services.FortXMPP.Online == false){
            res.sendFile(path.join(__dirname,"/services/html/page4.html"))
        }
    }
})

express.use(require('./services/LawinServer/index.js')) // LawinServer


functions.modulelog("Service-Status / Services got successful started")
module.exports = express;