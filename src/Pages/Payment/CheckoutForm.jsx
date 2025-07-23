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
        toast.success("Applied Successfully!");
        setProcessing(false);
        navigate("/");
      }
    }

    console.log(res);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Payment
        </h2>

        <div className="space-y-4">
          {/* Add new card section */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full input input-bordered rounded-md"
              required
            />
          </div>

          <div className="p-3 border rounded-md shadow-sm bg-gray-50">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Card Details
            </label>
            <CardElement className="p-2 bg-white rounded-md" />
          </div>
        </div>

        {errorMessage && (
          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={!stripe || processing}
          className={`w-full rounded-md bg-green-500 hover:bg-green-600 text-white font-medium py-2 transition duration-300 ${
            processing ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {processing ? "Processing..." : "Add Card"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
