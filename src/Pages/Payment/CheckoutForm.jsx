import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
const CheckoutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const { scholarshipId } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Load Scholarship
  const { data: scholarshipInfo, isPending } = useQuery({
    queryKey: ["scholarship", scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarship/${scholarshipId}`);
      return res.data;
    },
  });

  // Amount
  const amount = scholarshipInfo?.application_fees;
  const amountInCents = amount * 100;

  if (isPending) {
    return <Loader></Loader>;
  }

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    // CardElement
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    //  Create Payment Method
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

    // Create Payment Intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
      scholarshipId,
    });
    const clientSecret = res.data.clientSecret;

    // Result
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    if (paymentResult.error) {
      setProcessing(false);
      setErrorMessage(paymentResult.error.message);
      toast.error(errorMessage);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment Successful!");
        setProcessing(false);
        navigate(`/applicationForm/${scholarshipInfo?._id}`);
      }
    }

    console.log(res);
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
          {processing ? "Processing..." : "Pay"}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
