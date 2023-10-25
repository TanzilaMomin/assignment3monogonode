const mongoose = require("mongoose");

const maharashtrasModel = mongoose.model("maharashtras",{
    name : {type : String}
});

module.exports = maharashtrasModel ;