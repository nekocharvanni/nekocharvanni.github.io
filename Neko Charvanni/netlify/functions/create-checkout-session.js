// netlify/functions/create-checkout-session.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { priceId } = JSON.parse(event.body);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.URL}/success.html`,
      cancel_url:  `${process.env.URL}/cancel.html`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};

