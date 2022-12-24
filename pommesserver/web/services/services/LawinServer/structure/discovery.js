const Express = require("express");
const express = Express.Router();
const discovery = require("./../responses/discovery/discovery_frontend.json");

express.post("/lawinserver/*/discovery/surface/*", async (req, res) => {
    res.json(discovery);
})

express.post("/lawinserver/links/api/fn/mnemonic", async (req, res) => {
    var MnemonicArray = [];

    for (var i in discovery.Panels[0].Pages[0].results) {
        MnemonicArray.push(discovery.Panels[0].Pages[0].results[i].linkData)
    }

    res.json(MnemonicArray);
})

express.get("/lawinserver/links/api/fn/mnemonic/*", async (req, res) => {
    for (var i in discovery.Panels[0].Pages[0].results) {
        if (discovery.Panels[0].Pages[0].results[i].linkData.mnemonic == req.url.split("/").slice(-1)[0]) {
            res.json(discovery.Panels[0].Pages[0].results[i].linkData);
        }
    }
})

module.exports = express;