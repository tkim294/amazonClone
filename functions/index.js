const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I6QuJHFWJAKA29ZclZpctWX4WDpCeLxNAoZlA1BtCYNyMwd5uA3USvQD3KWtz49F1R3mXfCSoMbgqcMRLtAo4tG0085sV693t');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK - Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listeen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-c2453/us-central1/api