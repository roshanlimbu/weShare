require ("dotenv").config();
const mongoose = require("mongoose");

function DBconnect() {
  // Connect to the database
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true, // Use `false` instead of `true` for `useFindAndModify`
  }).then(()=> console.log("MongoDB connecton established."))
    .catch((error)=>console.log("MongoDB connection error:", error.message));

  // const connection = mongoose.connection;

  // connection.on("error", (err) => {
  //   console.error("MongoDB connection error:", err);
  // });

  // connection.once("open", () => {
  //   console.log("Connected to MongoDB");
  // });
};

module.exports = DBconnect;

