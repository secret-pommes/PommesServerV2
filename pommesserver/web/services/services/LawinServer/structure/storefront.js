const Express = require("express");
const express = Express.Router();
const functions = require("./functions.js");
//const catalog = functions.getItemShop();
const keychain = require("./../responses/keychain.json");

express.get("/lawinserver/fortnite/api/storefront/v2/catalog", async (req, res) => {
    if (req.headers["user-agent"].includes("2870186")) {
        return res.status(404).end();
    }

    res.redirect("https://api.nitestats.com/v1/epic/store")
})

express.get("/lawinserver/fortnite/api/storefront/v2/keychain", async (req, res) => {
    res.json(keychain)
})

express.get("/lawinserver/catalog/api/shared/bulk/offers", async (req, res) => {
    res.redirect("https://api.nitestats.com/v1/epic/store")
})

module.exports = express;