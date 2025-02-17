const mongoose = require("mongoose");
mongoose
  .connect(
   'mongodb+srv://advaith@cluster0.qerfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  , {dbName:"examBlog"})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = mongoose;
