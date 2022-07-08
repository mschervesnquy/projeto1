const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mschervesnquy:mschervesnquy@mauricio01.4citmns.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

module.exports = mongoose;
