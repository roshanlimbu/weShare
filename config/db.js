require ("dotenv").config();
const mongoose = require("mongoose");

function dbConnect() {
  // Connect to the database
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true, // Use `false` instead of `true` for `useFindAndModify`
  });

  const connection = mongoose.connection;

  // connection.on("error", (err) => {
  //   console.error("MongoDB connection error:", err);
  // });

  connection.once("open", () => {
    console.log("Connected to MongoDB");
  }).catch(err=>{
      console.log("MongoDB connection error:", err);
    });
}

module.exports = dbConnect;

