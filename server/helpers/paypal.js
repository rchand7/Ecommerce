const paypal = require("paypal-rest-sdk");
require("dotenv").config(); // Load environment variables

paypal.configure({
  mode: process.env.PAYPAL_MODE, // e.g., "sandbox" or "live"
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;

