import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlan } from "../services/subscriptionService";

import CheckoutForm from "../components/checkoutForm";
import Spinner from "../components/spinner";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const Subscribe = () => {
    const params = useParams();
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        getPlan(params.id).then((response) => {
            setPlan(response.data);
        });
    }, []);

    if (!plan) return <Spinner />;

    return (
        <div className="w-full">
            <div className="mx-auto">
                <div className="bg-slate-900 pt-10 w-full h-screen">
                    <div className="w-full max-w-xl mx-auto my-16 p-12">
                        <h1 className="text-white py-1 mb-2 font-bold text-xl border-b border-gray-600">
                            Subscribe
                        </h1>
                        <div className="flex justify-between items-end text-white my-4 pb-3">
                            <h2 className="text-2xl">{plan.display_name}</h2>
                            <p className="text-2xl font-bold">{plan.price}$</p>
                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm plan={plan} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
