const mongoose = require("mongoose");

const telanganasModel = mongoose.model("telanganas", {
    name: { type: String }
});

module.exports = telanganasModel;