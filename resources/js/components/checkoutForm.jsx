import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { confirm, getSecretKey } from "../services/subscriptionService";
import { Link } from "react-router-dom";

const CheckoutForm = ({ plan }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        getSecretKey().then((response) => {
            setClientSecret(response.data.clientSecret);
        });
    }, []);

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d",
                },
            },
            invalid: {
                fontFamily: "Arial, sans-serif",
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);

            await confirm(payload.paymentIntent.id, plan.id).then(() => {
                window.location.replace("/profile");
            });
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement
                className="bg-white py-4 px-2 rounded-md "
                id="card-element"
                options={cardStyle}
                onChange={handleChange}
            />
            <div className="flex space-x-2">
                <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                    className="w-full bg-red-600 text-white text-center py-4 my-4 rounded-md cursor-pointer hover:bg-red-500 active:bg-red-700"
                >
                    {processing ? "Submitting..." : "Pay now"}
                </button>
                <Link
                    to="/profile"
                    className="w-full bg-gray-600 text-white text-center py-4 my-4 rounded-md cursor-pointer hover:bg-gray-500 active:bg-gray-700"
                >
                    Cancel
                </Link>
            </div>
            {error && (
                <div className="text-red-600" role="alert">
                    {error}
                </div>
            )}
            <p className={succeeded ? "text-gray-200" : "hidden"}>
                Payment succeeded
            </p>
        </form>
    );
};

export default CheckoutForm;
