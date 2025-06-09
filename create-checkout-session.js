// netlify/functions/create-checkout-session.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { priceId, successUrl, cancelUrl } = JSON.parse(event.body);

    // Define your price IDs (set these up in your Stripe dashboard)
    const validPriceIds = [
      "price_single_story",    // $4.99 single story
      "price_all_stories",     // $12.99 all stories  
      "price_monthly"          // $7.99/month subscription
    ];

    if (!validPriceIds.includes(priceId)) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ error: "Invalid price ID" }),
      };
    }

    // Determine if this is a subscription or one-time payment
    const isSubscription = priceId === "price_monthly";

    const sessionConfig = {
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: isSubscription ? "subscription" : "payment",
      success_url: successUrl || `${process.env.URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.URL}/index.html`,
      
      // Add customer portal for subscriptions
      ...(isSubscription && {
        billing_address_collection: 'required',
      }),

      // Add metadata for tracking
      metadata: {
        purchase_type: isSubscription ? "subscription" : "one_time",
        price_id: priceId,
        timestamp: new Date().toISOString(),
      },

      // Allow promotional codes
      allow_promotion_codes: true,

      // Custom fields for user data
      custom_fields: [
        {
          key: "user_id",
          label: {
            type: "text",
            custom: "User ID (optional)"
          },
          type: "text",
          optional: true,
        },
      ],
    };

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        sessionId: session.id,
        url: session.url 
      }),
    };
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Failed to create checkout session",
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      }),
    };
  }
};