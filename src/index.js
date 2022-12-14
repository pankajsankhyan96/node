const express = require("express");
const http = require("http");
const app = express();
require('dotenv').config();
console.log('hello world', process.env.API_URL)
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my New Node App : " + process.env.API_URL + "  App Mode : " + process.env.APP_MODE + " Node Env : " + process.env.NODE_ENV})
})

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(PORT, () => {
  console.log(`Server running at : ${PORT}/`);
});