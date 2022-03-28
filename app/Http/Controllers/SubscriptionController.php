<?php

namespace App\Http\Controllers;

use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function index()
    {
        return response()->json(Subscription::all());
    }

    public function get($id)
    {
        return response()->json(Subscription::findOrFail($id));
    }

    public function stripe() {
        \Stripe\Stripe::setApiKey(env("STRIPE_SECRET"));
        $paymentIntent = \Stripe\PaymentIntent::create([
            'amount' => 1000,
            'currency' => 'usd',
          ]);

          return response()->json([
            'clientSecret' => $paymentIntent->client_secret,
          ]);
    }

    public function confirm() {
        $stripe = new \Stripe\StripeClient(env("STRIPE_SECRET"));
        $response = $stripe->paymentIntents->retrieve(request('intent'));

        if($response["id"] === request('intent')) {
            auth()->user()->subscriptions()->syncWithoutDetaching([request("id")]);
        }

        return response()->json("success");
    }
}
