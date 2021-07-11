// Executing a Payments API: Calling the HitPay Payments API to request payment from a customer
// Documentation: https://hit-pay.com/docs.html?shell#payment-requests

var axios = require("axios");

var config = {
  method: "post",
  url: "https://api.sandbox.hit-pay.com/v1/payment-requests",
  headers: {
    // IMPORTANT: Get up-to-date API Key from Payment Gateway >> API Keys
    // at https://dashboard.sandbox.hit-pay.com (expires after 90 days)
    "X-BUSINESS-API-KEY":
      "5901c36bdd7bf988ced699eee50077ba69d688a21e8ae338f212e16612703fd4",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
  },
  params: {
    amount: 3000,
    currency: "SGD",
    webhook: "https://example.com/webhook",
    redirect_url: "https://example.com/callback",
    allow_repeated_payments: false,
  },
};

axios(config)
  .then(function (response) {
    console.log(response.data);
    // Optional: Convert response data JSON to String
    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
