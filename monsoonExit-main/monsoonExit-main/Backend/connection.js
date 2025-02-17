const mongoose = require("mongoose");
mongoose
  .connect(
   'mongodb+srv://afhamali5477:afham@cluster0.avyta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  , {dbName:"examBlog"})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = mongoose;
