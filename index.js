const express = require("express");
const http = require("http");
const port = 3002;
const app = express();
require('dotenv').config();
console.log('hello world', process.env.APP_MODE)

//Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder applicatiodn."  + JSON.stringify(process.env)})
})

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, () => {
  console.log(`Server running at :${port}/`);
});