// bring in imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// check if production for process env --> access secret key
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//instantiate a new express application
const app = express();
// set port server (5000)
const port = process.env.PORT || 5000;

// utilize the libraries
// requests are processed as JSON
app.use(bodyParser.json());
// make sure url strings are proper chars
app.use(bodyParser.urlencoded({ extended: true }));
// cors library allows requests from localhost 3000 to port 5000
app.use(cors());

// if it is a production environment...
if (process.env.NODE_ENV === "production") {
  // allows serving of a file inside of client/build path
  // join directory as {keyName: pathName}
  app.use(express.static(path.join(__dirname, "client/build")));
  // any URL leads to get function
  app.get("*", function(req, res) {
    // if we have a GET request from a user, send a static file
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// listen for errors
app.listen(port, error => {
  if (error) {
    throw error;
  }
  // if no error console log port #
  console.log("server running on port " + port);
});
