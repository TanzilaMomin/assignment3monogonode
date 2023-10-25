const express = require("express");
const mongoose = require("mongoose");
const telanganasModel = require("./model/telanganasModel");
const maharashtrasModel = require("./model/maharashtrasModel");
const biharsModel = require("./model/biharsModel");
const manipursModel = require("./model/manipursModel");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/indiadb")
.then(()=>{
    console.log("mongo DB is connected!!!");
});

app.get("/",(req, res)=>{
    res.send("state and cities names in India...");
});

app.get("/telanganas", async (req, res)=>{
    const result = await telanganasModel.find({});
    res.send(result);
});

app.get("/maharashtras", async  (req, res)=>{
    const result = await maharashtrasModel.find({});
    res.send(result);
});

app.get("/bihars", async (req, res)=>{
    const result = await biharsModel.find({});
    res.send(result);
});

app.get("/manipurs", async  (req, res)=>{
    const result = await manipursModel.find({});
    res.send(result);
});

app.listen(4020, ()=>{
    console.log("Service is running on 4020 Port ....");
});