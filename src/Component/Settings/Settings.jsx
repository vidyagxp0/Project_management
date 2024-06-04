import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import CompanyDetails from "./CompanyDetails";
import System from "./System";
import Slack from "./Slack";
import Email from "./Email";
import EmailTemplates from "./EmailTemplates";
import EmailNotification from "./EmailNotification";
import CronJob from "./CronJob";
import DatabaseBackups from "./DatabaseBackups";
import CustomFields from "./CustomFields";
import Translations from "./Translations";
import Estimate from "./Estimate";
import Invoice from "./Invoice";
import PaymentGateway from "./PaymentGateway";

const Settings = () => {
  const [isSelcted, setIsSelected] = useState("companyDetails");
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Settings</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Settings</div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>
          <div className="flex flex-wrap gap-3 justify-center items-center px-5">
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "companyDetails" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("companyDetails")}
            >
              Company Details
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "system" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("system")}
            >
              System
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "slack" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("slack")}
            >
              Slack
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "email" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("email")}
            >
              Email{" "}
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "emailTemplates" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("emailTemplates")}
            >
              Email Templates{" "}
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "emailNotification"
                  ? "bg-cyan-400 text-white"
                  : ""
              }`}
              onClick={() => setIsSelected("emailNotification")}
            >
              Email Notification
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "cronJob" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("cronJob")}
            >
              Cron Job
            </div>
            {/* <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "menuAllocation" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("menuAllocation")}
            >
              Menu Allocation
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "theme" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("theme")}
            >
              Theme{" "}
            </div> */}
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "databaseBackups" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("databaseBackups")}
            >
              Database Backups
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "customFields" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("customFields")}
            >
              Custom Fields
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "translations" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("translations")}
            >
              {" "}
              Translations
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "estimate" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("estimate")}
            >
              Estimate{" "}
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "invoice" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("invoice")}
            >
              {" "}
              Invoice
            </div>
            <div
              className={`bg-[#f3f5ff] flex items-center rounded-full px-3 py-2 text-cyan-500 hover:bg-cyan-400 hover:text-white ${
                isSelcted === "paymentGateway" ? "bg-cyan-400 text-white" : ""
              }`}
              onClick={() => setIsSelected("paymentGateway")}
            >
              Payment Gateway
            </div>
          </div>

          <div className="py-3">
            {isSelcted==="companyDetails"?<CompanyDetails/>:isSelcted==="system"?<System/>:isSelcted==="slack"?<Slack/>:isSelcted==="email"?<Email/>:isSelcted==="emailTemplates"?<EmailTemplates/>:isSelcted==="emailNotification"?<EmailNotification/>:isSelcted==="cronJob"?<CronJob/>:
            isSelcted==="databaseBackups"?<DatabaseBackups/>:isSelcted==="customFields"?<CustomFields/>:isSelcted==="translations"?<Translations/>:isSelcted==="estimate"?<Estimate/>:isSelcted==="invoice"?<Invoice/>:isSelcted==="paymentGateway"?<PaymentGateway/>:null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
