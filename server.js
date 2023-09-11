const express = require("express") ;
const app = express();

let PORT =  process.env.PORT || 3000;

const connectDB = require("./config/db");
connectDB();

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
//3REsIjkwNRTSkA8s
