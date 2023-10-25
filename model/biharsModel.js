const mongoose = require("mongoose");

const biharsModel = mongoose.model("bihars",{
    name : {type : String}
});

module.exports = biharsModel ;