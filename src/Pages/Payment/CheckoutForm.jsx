import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const { scholarshipId } = useParams();
  console.log(scholarshipId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl shadow-md max-w-md mx-auto"
      >
        <CardElement className="border rounded-sm p-2"></CardElement>
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-primary mt-2"
        >
          Pay
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
