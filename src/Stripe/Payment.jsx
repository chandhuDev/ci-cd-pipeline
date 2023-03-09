import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from 'react-router-dom';
import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";

const KEY=import.meta.env.VITE_STRIPE_API_PUBLISHABLE_KEY

const stripePromise = loadStripe(KEY);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState();
  const location = useLocation();
  const numberOfSeats = location.state&& location.state.numberOfSeats
  
useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seats:{numberOfSeats} }),
    }).then((res) =>res.json()).then((data) => {
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret)});
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log(clientSecret)
  return (
    <div>
      {
      clientSecret ? (
        <div className="flex justify-center items-center">
          <Elements options={options} stripe={stripePromise}>
           <CheckoutForm />
          </Elements>
        </div>
        
      ): 
      (<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
          </div>
       </div>
      )
    }
    </div>
  );
}