import { Checkbox, Switch } from "@mui/material";
import React from "react";

const PaymentGateway = () => {
  return (
    <>
      <div className=" text-cyan-500 text-[18px] font-medium">
        Payment Gateway
      </div>
      <div className="border border-b-gray-300 my-2"></div>

      <div className="grid grid-cols-3 gap-5">
        <div className="group-input">
          <label> Paypal Label</label>
          <input />
        </div>
        <div className="group-input">
          <label>Paypal Client Id </label>
          <input type="" />
        </div>
        <div className="group-input">
          <label>Status</label>
          <Switch />
        </div>
        <div className="group-input">
          <label>Stripe Label</label>
          <input />
        </div>

        <div className="group-input">
          <label> Stripe Api Key </label>
          <input />
        </div>
        <div className="group-input">
          <label> Stripe Secret Key</label>
          <input />
        </div>
      </div>

      <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl">
        <button className="border border-gray-400 rounded-full px-4 py-2">
          Cancel
        </button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
          Save
        </button>
      </div>
    </>
  );
};

export default PaymentGateway;
