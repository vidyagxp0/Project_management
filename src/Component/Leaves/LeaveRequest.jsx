import React from "react";
import Header from "../Header/Header";
import { FaHome, FaList } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Leave Request</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Leave Request</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leaves")}>
                <FaList  />
              </div>
              <div
                className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => navigate("/leave-report")}
              >
                <HiDocumentReport />
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 grid grid-cols-2 gap-5 ">
          <div className="p-3 flex flex-col gap-2 shadow-2xl">
            <div>Test Leave Request</div>
            <div className="flex gap-3 items-center">
              <Avatar />
              <span className="text-cyan-400">Pankaj jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="font-medium">Request Date: </span>
                <span className="">07-05-2024</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Leave Date: </span>
                <span className="">10-05-2024</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Duration : </span>
              <span className="">Full Day</span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1">
                <span>125</span>
                <span>Total</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Approved</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Taken</span>
              </div>
              <div className="flex gap-1">
                <span>125</span>
                <span>Remaining</span>
              </div>
            </div>
            <span>Test</span>

            <div className="pb-3 flex gap-5 justify-end">
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Accept
              </button>
              <button className="border border-gray-400 rounded-full px-4 py-2">
                Reject
              </button>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-2 shadow-2xl">
            <div>Personal Leave Request</div>
            <div className="flex gap-3 items-center">
              <Avatar />
              <span className="text-cyan-400">Pankaj jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="font-medium">Request Date: </span>
                <span className="">07-05-2024</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Leave Date: </span>
                <span className="">10-05-2024</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Duration : </span>
              <span className="">Full Day</span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1">
                <span>125</span>
                <span>Total</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Approved</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Taken</span>
              </div>
              <div className="flex gap-1">
                <span>125</span>
                <span>Remaining</span>
              </div>
            </div>
            <span>Test</span>

            <div className="pb-3 flex gap-5 justify-end">
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Accept
              </button>
              <button className="border border-gray-400 rounded-full px-4 py-2">
                Reject
              </button>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-2 shadow-2xl">
            <div>Paid Leave Request</div>
            <div className="flex gap-3 items-center">
              <Avatar />
              <span className="text-cyan-400">Pankaj jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="font-medium">Request Date: </span>
                <span className="">07-05-2024</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Leave Date: </span>
                <span className="">10-05-2024</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Duration : </span>
              <span className="">Full Day</span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1">
                <span>125</span>
                <span>Total</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Approved</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Taken</span>
              </div>
              <div className="flex gap-1">
                <span>125</span>
                <span>Remaining</span>
              </div>
            </div>
            <span>Test</span>

            <div className="pb-3 flex gap-5 justify-end">
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Accept
              </button>
              <button className="border border-gray-400 rounded-full px-4 py-2">
                Reject
              </button>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-2 shadow-2xl">
            <div>Annual Leave Request</div>
            <div className="flex gap-3 items-center">
              <Avatar />
              <span className="text-cyan-400">Pankaj jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="font-medium">Request Date: </span>
                <span className="">07-05-2024</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Leave Date: </span>
                <span className="">10-05-2024</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Duration : </span>
              <span className="">Full Day</span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1">
                <span>125</span>
                <span>Total</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Approved</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Taken</span>
              </div>
              <div className="flex gap-1">
                <span>125</span>
                <span>Remaining</span>
              </div>
            </div>
            <span>Test</span>

            <div className="pb-3 flex gap-5 justify-end">
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Accept
              </button>
              <button className="border border-gray-400 rounded-full px-4 py-2">
                Reject
              </button>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-2 shadow-2xl">
            <div>Emergency Leave Request</div>
            <div className="flex gap-3 items-center">
              <Avatar />
              <span className="text-cyan-400">Pankaj jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="font-medium">Request Date: </span>
                <span className="">07-05-2024</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Leave Date: </span>
                <span className="">10-05-2024</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Duration : </span>
              <span className="">Full Day</span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1">
                <span>125</span>
                <span>Total</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Approved</span>
              </div>
              <div className="flex gap-1">
                <span>0</span>
                <span>Taken</span>
              </div>
              <div className="flex gap-1">
                <span>125</span>
                <span>Remaining</span>
              </div>
            </div>
            <span>Test</span>

            <div className="pb-3 flex gap-5 justify-end">
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Accept
              </button>
              <button className="border border-gray-400 rounded-full px-4 py-2">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
