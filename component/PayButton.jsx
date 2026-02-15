import React from "react";
import GooglePayButton from "@google-pay/button-react";

function PayButton({amount}) {
  return (
    <GooglePayButton
      environment="TEST" // TEST mode
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["VISA", "MASTERCARD"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example", // use "example" in TEST mode
              gatewayMerchantId: "exampleMerchantId"
            },
          },
        }],
        merchantInfo: {
          merchantId: "12345678901234567890", // sample test ID
          merchantName: "Test Merchant"
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: amount,
          currencyCode: "INR",
          countryCode: "IN",
        },
      }}
      onLoadPaymentData={paymentRequest => {
        console.log("Payment successful", paymentRequest);
        alert("Payment simulated! Check console for details.");
      }}
    />
  );
}

export default PayButton;