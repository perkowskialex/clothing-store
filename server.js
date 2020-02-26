// bring in imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// check if production for process env --> access secret key
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// bring in stripe and then invoke it with the stripe secret key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

//backend Stripe payment route

// post gets a req obj and a res obj
// this will use our Stripe token  with an id that has all info for customer
app.post("/payment", (req, res) => {
  // body obj is passed a source parameter, which contains what is needed from Stripe
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  // make charge with Stripe
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      //failure status code and send error
      res.status(500).send({ error: stripeErr });
    } else {
      // if successful, 200 response and send the success Stripe response obj
      res.status(200).send({ success: stripeRes });
    }
  });
});
