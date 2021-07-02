console.log("Hello world");
//import express
const express = require("express");
// associate the express methods to a variable
const app = express();
//create the variable port
const port = 8080;
const date = new Date(Date.now());
app.use(function (req, res, next) {
  const day = date.getDay();
  const hour = date.getHours();
  day === 0 || day === 6 || hour < 9 || hour > 17
    ? res.sendFile(__dirname + "/public/notfound.html")
    : next();
});
app.use(express.static("public"));

//listen to the port
app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server is running on port 8080");
});
