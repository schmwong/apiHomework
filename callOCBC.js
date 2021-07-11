// 1. Consuming a Bank API: Calling the OCBC 360 Interest Rate Calculator API from JavaScript
// Documentation: https://api.ocbc.com/store/OCBC/apis/documentation?title=360%20Interest%20Rate%20Calculator&name=OCBC360_Interest&type=Informational

// Add axios module to node js before starting
// npm install axios
var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.ocbc.com:8243/OCBC360_Interest/1.0/*",
  headers: {
    // IMPORTANT: Get up-to-date Bearer Token (Access Token) under nustest11 Sandbox Application
    // at api.ocbc.com/store/applications/subscriptions (expires after 90 days)
    Authorization: "Bearer d2323a8c-262d-392e-9e94-be40f069ba6f",
    Cookie:
      "incap_ses_961_1634122=4yuINxlU8UsmqH6vxShWDQeI6mAAAAAAQqoLbNWdX1quBX+SeKIRdQ==; nlbi_1634122=dtyDR4ylfncrnh/YZPv8YwAAAABW+1cLoNSV4ZCQqrp7Yqgv; visid_incap_1634122=zN7e+tpoQvuapS6iNN5wlweI6mAAAAAAQUIPAAAAAACqpKpR+DNYE9mLa8D9qXNW",
  },
  params: {
    accountBalance: 1111,
    salary: true,
    payBill: false,
    ccSpend: false,
    insurancePurchase: 0,
    investmentPurchase: 111,
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
