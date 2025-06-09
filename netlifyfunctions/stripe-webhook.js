// netlify/functions/stripe-webhook.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sig = event.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  // Handle the event
  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      const session = stripeEvent.data.object;
      console.log('Payment successful for session:', session.id);
      
      // Here you would typically:
      // 1. Update user's subscription status in your database
      // 2. Send confirmation email
      // 3. Grant access to premium content
      
      await handleSuccessfulPayment(session);
      break;

    case 'customer.subscription.created':
      const subscription = stripeEvent.data.object;
      console.log('Subscription created:', subscription.id);
      await handleSubscriptionCreated(subscription);
      break;

    case 'customer.subscription.deleted':
      const deletedSubscription = stripeEvent.data.object;
      console.log('Subscription cancelled:', deletedSubscription.id);
      await handleSubscriptionCancelled(deletedSubscription);
      break;

    case 'invoice.payment_succeeded':
      const invoice = stripeEvent.data.object;
      console.log('Invoice payment succeeded:', invoice.id);
      await handleInvoicePaymentSucceeded(invoice);
      break;

    case 'invoice.payment_failed':
      const failedInvoice = stripeEvent.data.object;
      console.log('Invoice payment failed:', failedInvoice.id);
      await handleInvoicePaymentFailed(failedInvoice);
      break;

    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

async function handleSuccessfulPayment(session) {
  const customerId = session.customer;
  const priceId = session.metadata?.price_id;
  
  // In a real application, you would update your database here
  // For example, using a service like Supabase, Firebase, or traditional database:
  
  /*
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: 'active',
      subscriptionType: priceId,
      lastPaymentDate: new Date(),
      accessLevel: getPremiumAccessLevel(priceId)
    }
  });
  */
  
  console.log(`Granted access for customer ${customerId} with price ${priceId}`);
}

async function handleSubscriptionCreated(subscription) {
  const customerId = subscription.customer;
  
  /*
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionId: subscription.id,
      subscriptionStatus: subscription.status,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000)
    }
  });
  */
  
  console.log(`Subscription created for customer ${customerId}`);
}

// netlify/functions/stripe-webhook.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  const sig = event.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `Webhook Error: ${err.message}`
      }),
    };
  }

  // Handle the event
  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        const session = stripeEvent.data.object;
        console.log('Payment successful for session:', session.id);
        
        // Here you would typically:
        // 1. Update user's subscription status in your database
        // 2. Send confirmation email
        // 3. Grant access to premium content
        
        await handleSuccessfulPayment(session);
        break;

      case 'customer.subscription.created':
        const subscription = stripeEvent.data.object;
        console.log('Subscription created:', subscription.id);
        await handleSubscriptionCreated(subscription);
        break;

      case 'customer.subscription.updated':
        const updatedSubscription = stripeEvent.data.object;
        console.log('Subscription updated:', updatedSubscription.id);
        await handleSubscriptionUpdated(updatedSubscription);
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = stripeEvent.data.object;
        console.log('Subscription cancelled:', deletedSubscription.id);
        await handleSubscriptionCancelled(deletedSubscription);
        break;

      case 'invoice.payment_succeeded':
        const invoice = stripeEvent.data.object;
        console.log('Invoice payment succeeded:', invoice.id);
        await handleInvoicePaymentSucceeded(invoice);
        break;

      case 'invoice.payment_failed':
        const failedInvoice = stripeEvent.data.object;
        console.log('Invoice payment failed:', failedInvoice.id);
        await handleInvoicePaymentFailed(failedInvoice);
        break;

      case 'customer.created':
        const customer = stripeEvent.data.object;
        console.log('Customer created:', customer.id);
        await handleCustomerCreated(customer);
        break;

      default:
        console.log(`Unhandled event type ${stripeEvent.type}`);
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        received: true,
        event_type: stripeEvent.type 
      }),
    };
  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error processing webhook'
      }),
    };
  }
};

async function handleSuccessfulPayment(session) {
  const customerId = session.customer;
  const customerEmail = session.customer_details?.email;
  const priceId = session.metadata?.price_id;
  const purchaseType = session.metadata?.purchase_type;
  
  console.log(`Processing successful payment:`, {
    sessionId: session.id,
    customerId,
    customerEmail,
    priceId,
    purchaseType,
    amountTotal: session.amount_total
  });
  
  // In a real application, you would update your database here
  // Example using a hypothetical database service:
  
  /*
  await database.users.upsert({
    where: { 
      email: customerEmail 
    },
    update: {
      stripeCustomerId: customerId,
      subscriptionStatus: 'active',
      subscriptionType: priceId,
      lastPaymentDate: new Date(),
      accessLevel: getPremiumAccessLevel(priceId),
      totalSpent: { increment: session.amount_total / 100 }
    },
    create: {
      email: customerEmail,
      stripeCustomerId: customerId,
      subscriptionStatus: 'active',
      subscriptionType: priceId,
      lastPaymentDate: new Date(),
      accessLevel: getPremiumAccessLevel(priceId),
      totalSpent: session.amount_total / 100
    }
  });
  */
  
  // Send confirmation email (example with a service like SendGrid)
  /*
  await sendConfirmationEmail({
    to: customerEmail,
    template: 'premium_access_granted',
    data: {
      accessLevel: getPremiumAccessLevel(priceId),
      loginUrl: `${process.env.URL}/index.html`,
      supportUrl: `${process.env.URL}/support`
    }
  });
  */
  
  console.log(`Granted ${getPremiumAccessLevel(priceId)} access for customer ${customerId}`);
}

async function handleSubscriptionCreated(subscription) {
  const customerId = subscription.customer;
  
  console.log(`Processing subscription creation:`, {
    subscriptionId: subscription.id,
    customerId,
    status: subscription.status,
    currentPeriodEnd: new Date(subscription.current_period_end * 1000)
  });
  
  // Update database with subscription details
  /*
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionId: subscription.id,
      subscriptionStatus: subscription.status,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      accessLevel: 'premium_monthly'
    }
  });
  */
  
  console.log(`Subscription ${subscription.id} created for customer ${customerId}`);
}

async function handleSubscriptionUpdated(subscription) {
  const customerId = subscription.customer;
  
  console.log(`Processing subscription update:`, {
    subscriptionId: subscription.id,
    customerId,
    status: subscription.status,
    cancelAtPeriodEnd: subscription.cancel_at_period_end
  });
  
  // Update subscription status in database
  /*
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: subscription.status,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000)
    }
  });
  */
  
  // If subscription is set to cancel, send retention email
  if (subscription.cancel_at_period_end) {
    /*
    await sendRetentionEmail({
      customerId,
      cancellationDate: new Date(subscription.current_period_end * 1000)
    });
    */
  }
}

async function handleSubscriptionCancelled(subscription) {
  const customerId = subscription.customer;
  
  console.log(`Processing subscription cancellation:`, {
    subscriptionId: subscription.id,
    customerId,
    cancelledAt: new Date(subscription.canceled_at * 1000)
  });
  
  // Update user access level
  /*
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: 'cancelled',
      accessLevel: 'free',
      cancelledAt: new Date()
    }
  });
  */
  
  // Send cancellation confirmation and feedback request
  /*
  await sendCancellationEmail({
    customerId,
    feedbackUrl: `${process.env.URL}/feedback`
  });
  */
  
  console.log(`Subscription cancelled for customer ${customerId}`);
}

async function handleInvoicePaymentSucceeded(invoice) {
  const customerId = invoice.customer;
  const subscriptionId = invoice.subscription;
  
  console.log(`Processing successful recurring payment:`, {
    invoiceId: invoice.id,
    customerId,
    subscriptionId,
    amountPaid: invoice.amount_paid
  });
  
  // Update payment history and extend access
  /*
  await database.paymentHistory.create({
    data: {
      customerId,
      invoiceId: invoice.id,
      amount: invoice.amount_paid / 100,
      currency: invoice.currency,
      paidAt: new Date(invoice.status_transitions.paid_at * 1000),
      paymentStatus: 'succeeded'
    }
  });
  
  await database.users.update({
    where: { stripeCustomerId: customerId },
    data: {
      lastPaymentDate: new Date(),
      totalSpent: { increment: invoice.amount_paid / 100 }
    }
  });
  */
  
  console.log(`Recurring payment processed for customer ${customerId}`);
}

async function handleInvoicePaymentFailed(invoice) {
  const customerId = invoice.customer;
  const subscriptionId = invoice.subscription;
  
  console.log(`Processing failed payment:`, {
    invoiceId: invoice.id,
    customerId,
    subscriptionId,
    attemptCount: invoice.attempt_count
  });
  
  // Log failed payment attempt
  /*
  await database.paymentHistory.create({
    data: {
      customerId,
      invoiceId: invoice.id,
      amount: invoice.amount_due / 100,
      currency: invoice.currency,
      attemptedAt: new Date(),
      paymentStatus: 'failed',
      failureReason: invoice.last_finalization_error?.message
    }
  });
  */
  
  // Send payment failure notification
  /*
  await sendPaymentFailureEmail({
    customerId,
    invoiceUrl: invoice.hosted_invoice_url,
    updatePaymentUrl: `${process.env.URL}/update-payment`
  });
  */
  
  // If this is the final attempt, downgrade access
  if (invoice.attempt_count >= 3) {
    /*
    await database.users.update({
      where: { stripeCustomerId: customerId },
      data: {
        accessLevel: 'free',
        subscriptionStatus: 'past_due'
      }
    });
    */
    
    console.log(`Access downgraded for customer ${customerId} due to failed payments`);
  }
  
  console.log(`Payment failed for customer ${customerId}, attempt ${invoice.attempt_count}`);
}

async function handleCustomerCreated(customer) {
  console.log(`New customer created:`, {
    customerId: customer.id,
    email: customer.email,
    name: customer.name
  });
  
  // Create user record in database
  /*
  await database.users.create({
    data: {
      email: customer.email,
      name: customer.name,
      stripeCustomerId: customer.id,
      accessLevel: 'free',
      createdAt: new Date(customer.created * 1000)
    }
  });
  */
  
  // Send welcome email
  /*
  await sendWelcomeEmail({
    to: customer.email,
    name: customer.name,
    loginUrl: `${process.env.URL}/index.html`
  });
  */
}

function getPremiumAccessLevel(priceId) {
  switch (priceId) {
    case 'price_single_story':
      return 'single_story';
    case 'price_all_stories':
      return 'all_stories';
    case 'price_monthly':
      return 'premium_monthly';
    default:
      return 'free';
  }
}

// Example email functions (you would implement these with your email service)
/*
async function sendConfirmationEmail({ to, template, data }) {
  // Implementation with SendGrid, Mailgun, etc.
}

async function sendRetentionEmail({ customerId, cancellationDate }) {
  // Send email to try to retain canceling customer
}

async function sendCancellationEmail({ customerId, feedbackUrl }) {
  // Send confirmation and request feedback
}

async function sendPaymentFailureEmail({ customerId, invoiceUrl, updatePaymentUrl }) {
  // Notify about failed payment and provide update links
}

async function sendWelcomeEmail({ to, name, loginUrl }) {
  // Send welcome email to new customers
}
*/