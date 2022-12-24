const Express = require("express");
const express = Express();
const path = require("path");
const functions = require("../../structure/functions.js")

// main (index)
express.get("/database", (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"))
})


// content (icons) // not used (17.11.2022)
express.get("/icons/exe.png", (req, res)=>{
    res.sendFile(path.join(__dirname,"/icons/exe.png"))
})

express.get("/icons/zip.png", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/icons/zip.png"))
})

// front (start of database)
express.get("/tools", (req, res)=>{ // tools
    res.sendFile(path.join(__dirname, "/html/tools.html"))
})

express.get("/software", (req, res)=>{ // software
    res.sendFile(path.join(__dirname, "/html/software.html"))
})

express.get("/wallpapers", (req, res)=>{ // wallpapers
    res.sendFile(path.join(__dirname, "/html/wallpapers.html"))
})

express.get("/advanced", (req, res)=>{ // advanced
    res.sendFile(path.join(__dirname, "/html/advanced.html"))
})

express.get("/games", (req, res)=>{ // games
    res.sendFile(path.join(__dirname, "/html/games.html"))
})


// games
express.get("/files/games/minecraft", (req, res)=>{ // to get latest
    res.redirect("https://launcher.mojang.com/download/MinecraftInstaller.msi")
})

express.get("/files/games/minecraftcracked", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/games/Minecraft.zip"))
})

express.get("/files/games/terraria", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/games/Terraria.zip"))
})

express.get("/files/games/outlast", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/games/Outlast.zip"))
})

express.get("/files/games/nsmbwii", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/games/NSMBWii.zip"))
})


// wallpapers
express.get("/files/wallpapers/Antarctic", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/Antarctic.jpg"))
})

express.get("/files/wallpapers/Aurora", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/Aurora.jpg"))
})

express.get("/files/wallpapers/AuroraFall", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/AuroraFall.jpg"))
})

express.get("/files/wallpapers/BlueMountain", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/BlueMountain.jpg"))
})

express.get("/files/wallpapers/DarkCloudes", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/DarkCloudes.png"))
})

express.get("/files/wallpapers/FoxInSnow", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/FoxInTheSnow.jpg"))
})

express.get("/files/wallpapers/GrayRoad", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/GrayRoad.jpg"))
})

express.get("/files/wallpapers/Ice", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/Ice.png"))
})

express.get("/files/wallpapers/Moonlight", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/moonlight.png"))
})

express.get("/files/wallpapers/Perfect", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/perfect.jpg"))
})

express.get("/files/wallpapers/Minecraft", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/Minecraft.png"))
})

express.get("/files/wallpapers/MacOSBlack", (req, res)=>{
    res.sendFile(path.join(__dirname, "/files/wallpapers/MacOSV2.jpg"))
})


// advanced software
express.get("/files/advanced/hxd", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/advanced/HxDSetup.zip"))
})

express.get("/files/advanced/processhacker", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/advanced/processhacker.zip"))
})

express.get("/files/advanced/ue4unlocker", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/advanced/ue4unlocker.zip"))
})

express.get("/files/advanced/vscode", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/advanced/VSCodeSetup.zip"))
})

express.get("/files/advanced/vs", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/advanced/VisualStudioSetup.zip"))
})


// tools
express.get("/files/tools/anydesk", (req, res)=>{ // to get latest
    res.redirect('https://anydesk.com/de/downloads/thank-you?dv=win_exe')
})

express.get("/files/tools/cmdunlocker", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/tools/cmdunlocker.zip"))
})

express.get("/files/tools/rms", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/tools/RMS.zip"))
})

express.get("/files/tools/setupbypass", (req, res)=>{
    res.sendFile(path.join(__dirname,"/files/tools/SetupBypass.zip"))
})


// logging and exporting to main
functions.modulelog(`Database got successful started`)
module.exports = express;