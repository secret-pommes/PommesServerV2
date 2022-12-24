const Express = require("express");
const express = Express();
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

express.use(Express.json());
express.use(Express.urlencoded({ extended: true }));
express.use(Express.static('public'));
express.use(cookieParser());

express.use(require("./structure/party.js"));
express.use(require("./structure/discovery.js"))
express.use(require("./structure/privacy.js"));
express.use(require("./structure/timeline.js"));
express.use(require("./structure/user.js"));
express.use(require("./structure/contentpages.js"));
express.use(require("./structure/friends.js"));
express.use(require("./structure/main.js"));
express.use(require("./structure/storefront.js"));
express.use(require("./structure/version.js"));
express.use(require("./structure/lightswitch.js"));
express.use(require("./structure/affiliate.js"));
express.use(require("./structure/matchmaking.js"));
express.use(require("./structure/cloudstorage.js"));

express.get("/lawinserver", (req, res)=>{res.sendFile(path.join(__dirname,"/public/index.html"))})
express.get("/reqs/index.css", (req, res)=>{res.sendFile(path.join(__dirname,"/public/reqs/index.css"))})
express.get("/reqs/jquery.js", (req, res)=>{res.sendFile(path.join(__dirname,"/public/reqs/jquery.js"))})
express.get("/reqs/scripts.js", (req, res)=>{res.sendFile(path.join(__dirname,"/public/reqs/script.js"))})
express.get("/reqs/styles.css", (req, res)=>{res.sendFile(path.join(__dirname,"/public/reqs/styles.css"))})

try {
    if (!fs.existsSync(path.join(process.env.LOCALAPPDATA, "LawinServer"))) fs.mkdirSync(path.join(process.env.LOCALAPPDATA, "LawinServer"));
} catch (err) {
    // fallback
    if (!fs.existsSync(path.join(__dirname, "ClientSettings"))) fs.mkdirSync(path.join(__dirname, "ClientSettings"));
}

module.exports = express;