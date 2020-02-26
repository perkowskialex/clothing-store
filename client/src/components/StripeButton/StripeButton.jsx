import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ojiXUrXlBInXN9zuzOR4ptmq00sajiezEA";

  const onToken = token => {
    // pass info to axios
    axios({
      url: "payment",
      // post request
      method: "post",
      // pass token and amount for back end
      data: {
        amount: priceForStripe,
        token: token
      }
      // check out response
    })
      .then(response => {
        // if successful, pop up
        alert("payment successful");
      })
      //
      .catch(error => {
        console.log("payment error", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the test credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store, LLC"
      billingAddress
      shippingAddress
      image="https://svgur.com/i/Hzx.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
