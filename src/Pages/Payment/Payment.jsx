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
        {/* Title */}
        <div className="flex justify-center mt-5 md:mt-10 mb-6">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Payment Now
            </h1>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
