const mongoose = require("mongoose");

const manipursModel = mongoose.model("manipurs",{
    name : {type : String}
});

module.exports = manipursModel ;