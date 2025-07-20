import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

const Payment = () => {
  return (
    <div className="pt-25">
      <Helmet>
        <title>Payment || Edufellow</title>
      </Helmet>
      <div>
        <h1>Payment Now</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
