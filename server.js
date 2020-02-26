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
// link front end
