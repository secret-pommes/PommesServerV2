const Express = require("express");
const express = Express();
const serverconfig = require("./config/serverconfig.json")
const functions = require("./structure/functions.js");
const port = process.env.PORT || serverconfig.ServerConfig.ServerPort || 1337 
// fallback on port 1337, its 1337 cuz if its in use ik that there is an error

// displays the website
express.use(Express.static('web'))

// starts the server
express.listen(port, ()=>{
    functions.serverlog(`Started listen on port: ${port}\n`)
}).on("error", (err)=>{ // error show up
    if(err.code == "EADDRINUSE"){
        functions.errorlog(`Server cannot listen on port: ${port}\n\n\n\n\nThis window will close in 3 seconds!\n\n`)
        setTimeout(functions.closeserver, 3000)
    }
})

setTimeout(() => {
    express.use(require("./web/database/index.js"))       // gets database downloads working
    express.use(require("./web/services/index.js"))       // gets services working / services status
    express.use(require("./structure/api.js"))            // other endpoints for API
}, 3005); // find a better way, so i can remove the timeout