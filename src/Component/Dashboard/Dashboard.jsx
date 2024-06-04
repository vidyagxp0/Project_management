import React from "react";
import Header from "../Header/Header";
import {
  BsCircle,
  BsListTask,
  BsUiRadios,
  BsWindowStack,
} from "react-icons/bs";
import { LiaTradeFederation } from "react-icons/lia";
import { RiIndentIncrease } from "react-icons/ri";
import { WiBarometer } from "react-icons/wi";
import { FaChild, FaFileInvoice, FaUser, FaUserAlt } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { FcLeave } from "react-icons/fc";
import { GrArticle } from "react-icons/gr";
import MyLineChart from "../Chart/MyLineChart";
import PieChart from "../Chart/PieChart";
import { IoMdAdd } from "react-icons/io";
import { Avatar, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[100px]">
      <div className="p-3">
        <div className="grid grid-cols-4 gap-5">
          <div
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg shadow-xl "
            onClick={() => navigate("/projects")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <BsWindowStack size={35} />
              <span className="text-[22px]">Projects</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                82 <span>In Progress</span>
              </div>
              <div className="text-[20px]">
                198 <span>0verdue</span>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-red-500 from-10% via-violet-500 via-30% to-yellow-500 to-90% rounded-lg shadow-xl "
            onClick={() => navigate("/tasks")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <BsUiRadios size={35} />
              <span className="text-[22px]">Tasks</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                220 <span>In Progress</span>
              </div>
              <div className="text-[20px]">
                80 <span>0verdue</span>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-pink-500 from-10% via-orange-500 via-30% to-rose-500 to-90% rounded-lg shadow-xl "
            onClick={() => navigate("/defects")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <LiaTradeFederation size={35} />
              <span className="text-[22px]">Defects</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                120 <span>In Progress</span>
              </div>
              <div className="text-[20px]">
                60 <span>0verdue</span>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 rounded-lg shadow-xl "
            onClick={() => navigate("/incidents")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <RiIndentIncrease size={35} />
              <span className="text-[22px]">Incidents</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                70 <span>In Progress</span>
              </div>
              <div className="text-[20px]">
                10 <span>0verdue</span>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-violet-500 from-10% via-yellow-500 via-30% to-red-500 to-90% rounded-lg shadow-xl "
            onClick={() => navigate("/estimates")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <WiBarometer size={35} />
              <span className="text-[22px]">Estimates</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                2 <span>Accepted</span>
              </div>
              <div className="text-[20px]">
                0 <span>Declined</span>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-green-500 from-10% via-cyan-500 via-30% to-violet-500 to-90% rounded-lg shadow-xl "
            onClick={() => navigate("/invoices")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <FaFileInvoice size={35} />
              <span className="text-[22px]">Invoices</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                38 <span>Paid</span>
              </div>
              <div className="text-[20px]">
                8 <span>Unpaid</span>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg shadow-xl cursor-pointer "
            onClick={() => navigate("/payments")}
          >
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <GiPayMoney size={35} />
              <span className="text-[22px]">Payments</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                50 <span>Due</span>
              </div>
              <div className="text-[20px]">
                18 <span>Recieved</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg shadow-xl ">
            <div className="p-4 flex gap-3 items-center justify-center text-white">
              <FcLeave size={35} />
              <span className="text-[22px]">Leaves</span>
            </div>
            <div className="flex justify-between items-center text-white px-4 pb-4 pt-1">
              <div className="text-[20px]">
                15 <span>Recieved</span>
              </div>
              <div className="text-[20px]">
                5 <span>Approved</span>
              </div>
            </div>
          </div>

          <div className="flex rounded-lg shadow-xl p-4  gap-10">
            <div className="py-3 px-5 bg-cyan-500 text-white rounded-xl flex items-center justify-center">
              <FaUser size={40} />
            </div>
            <div className="flex flex-col  px-4 pb-4 pt-1">
              <div className="text-[28px] font-medium">15</div>
              <div className="text-[20px]">Users</div>
            </div>
          </div>

          <div className="flex rounded-lg shadow-xl p-4  gap-10">
            <div className="py-3 px-5 bg-green-500 text-white rounded-xl flex items-center justify-center">
              <FaUserAlt size={40} />
            </div>
            <div className="flex flex-col  px-4 pb-4 pt-1">
              <div className="text-[28px] font-medium">48</div>
              <div className="text-[20px]">Clients</div>
            </div>
          </div>

          <div className="flex rounded-lg shadow-xl p-4  gap-10">
            <div className="py-3 px-5 bg-indigo-500 text-white rounded-xl flex items-center justify-center">
              <FaChild size={40} />
            </div>
            <div className="flex flex-col  px-4 pb-4 pt-1">
              <div className="text-[28px] font-medium">42</div>
              <div className="text-[20px]">Teams</div>
            </div>
          </div>
          <div className="flex rounded-lg shadow-xl p-4  gap-10">
            <div className="py-3 bg-rose-500 text-white rounded-xl flex items-center justify-center px-5">
              <GrArticle size={40} />
            </div>
            <div className="flex flex-col  px-4 pb-4 pt-1">
              <div className="text-[28px] font-medium">32</div>
              <div className="text-[20px]">Articles</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 py-3">
          <div className=" shadow-2xl">
            <MyLineChart title={"Task Status"} />
          </div>
          <div className=" shadow-2xl">
            <MyLineChart title={"Project Status"} chartType="bar" />
          </div>
          <div className=" shadow-2xl">
            <MyLineChart title={"Monthly Report 2024"} />
          </div>

          <div className="pt-8 p-2  shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Projects</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500 "></div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">P001</span>-
                  <span>Pankaj</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>09-04-2023</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Open
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">P001</span>-
                  <span>Pankaj</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>09-04-2023</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Open
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">P001</span>-
                  <span>Pankaj</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>09-04-2023</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Open
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">P001</span>-
                  <span>Pankaj</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>09-04-2023</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Open
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2  shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Tasks</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">T001</span>-
                  <span>admin</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">T001</span>-
                  <span>Web Page</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">T001</span>-
                  <span>Company</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">T001</span>-
                  <span>Validation</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2  shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Defects</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4  shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF002</span>-
                  <span>Test</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF01</span>-
                  <span>Test</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>Due Amount</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-700 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Assigned
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="border-l-4 border-yellow-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF001</span>-
                  <span>Signup</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    In Progress
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Incidents</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>User Login</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Deffered
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>User Login</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Deffered
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>User Login</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Deffered
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>User Login</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Deffered
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Estimates</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">PEN NO-0098</span>-
                  <span>Amount $110 </span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>29-06-2024</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Sent
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-green-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">PEN NO-0097</span>-
                  <span>Amount $20</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-green-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Accepted
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-green-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">DEF0011</span>-
                  <span>User Login</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div></div>
                  <div className="flex items-center justify-center bg-green-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Accepted
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-cyan-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">PEN No-0086</span>-
                  <span>Amount $160</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>30-04-2024</div>
                  <div className="flex items-center justify-center bg-cyan-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Sent{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Due Invoice</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">Pnr-001</span>-
                  <span>Due Amount $100</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>25-05-2024</div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Unpaid
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">Pnr-002</span>-
                  <span>Due Amount $120</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>28-05-2024</div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Unpaid
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">Pnr-003</span>-
                  <span>Due Amount $340</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>20-05-2024</div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Unpaid
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="border-l-4 border-red-500  p-3  ">
                <div className="flex ">
                  <span className="text-green-400">Pnr004</span>-
                  <span>Due Amount $30</span>
                </div>
                <div className="flex justify-between pt-2">
                  <Avatar></Avatar>
                  <div>23-04-2024</div>
                  <div className="flex items-center justify-center bg-red-500 text-white rounded-full  px-3 py-1 text-[12px]">
                    {" "}
                    Unpaid
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Todo</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
              </div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-4 ">
              <div className="border border-gray-400 rounded p-2">
                <div className="flex gap-5 items-center">
                  <Checkbox />
                  <span> Create Api</span>
                </div>
                <div className="flex justify-between">
                  <div className="text-cyan-500">T080706 </div>
                  <div>15-05-2024</div>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="border border-gray-400 rounded p-2">
                <div className="flex gap-5 items-center">
                  <Checkbox />
                  <span> Create Form</span>
                </div>
                <div className="flex justify-between">
                  <div className="text-cyan-500">T0807010 </div>
                  <div>15-05-2024</div>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="border border-gray-400 rounded p-2">
                <div className="flex gap-5 items-center">
                  <Checkbox />
                  <span> Create Report</span>
                </div>
                <div className="flex justify-between">
                  <div className="text-cyan-500">T080709 </div>
                  <div>15-05-2024</div>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="border border-gray-400 rounded p-2">
                <div className="flex gap-5 items-center">
                  <Checkbox />
                  <span> Create Ui</span>
                </div>
                <div className="flex justify-between">
                  <div className="text-cyan-500">T080709 </div>
                  <div>15-05-2024</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Activities</div>
            </div>
            <div className="border border-b-gray-500"></div>
            <div className="p-3 shadow-2xl ">
              <div className=" border-l-4 border-green-500 p-3">
                <div className="flex gap-6">
                  <Avatar></Avatar>
                  <div>
                    Todo Updated <span className="font-bold">789abc</span>
                  </div>
                </div>
                <div className="flex py-3">
                  <div className="bg-green-200 flex items-center justify-center px-[72px] py-1">
                    27th May 2024
                  </div>
                  <div className="border border-green-200 flex items-center justify-center px-[72px] py-1">
                    {" "}
                    11:30 am
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Meetings</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
              </div>
            </div>
            <div className=" border border-gray-500"> </div>
            <div className="p-4">There are no any Meetings</div>
          </div>

          <div className="pt-8 p-2 shadow-2xl">
            <div className="flex justify-between p-4 items-center ">
              <div className="text-[20px] font-medium">Announcements</div>
              <div className="flex gap-5">
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <BsListTask />
                </div>
                <div className="bg-gray-500 text-white flex items-center justify-center p-2 rounded">
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className=" border-b-2 border-gray-500"> </div>
            <div className="p-4">
              <div className="grid grid-cols-5 ">
                <div>18-02-2020</div>
                <div>
                  <BsCircle />
                </div>
                <div className="col-span-3 font-bold">
                  Reminder: Food Receipt Submission
                </div>
                <div></div>
                <div className="border-l-2 border-gray-400 ml-[6px]"></div>
                <div className="col-span-3 py-2">
                  Team, please submit food receipt before 22.12.2019.
                </div>
                <div>26-02-2020</div>
                <div>
                  <BsCircle className="mt-1" />
                </div>
                <div className="col-span-3 font-bold">
                  Welcome to New Member
                </div>
                <div></div>
                <div className="border-l-2 border-gray-400 ml-[6px]"></div>
                <div className="col-span-3 py-2">
                  Welcome and intro meeting to new member in developer team.
                </div>{" "}
                <div>23-02-2020</div>
                <div>
                  <BsCircle className="mt-1" />
                </div>
                <div className="col-span-3 font-bold">
                  Food Receipt Submission
                </div>
                <div></div>
                <div className="border-l-2 border-gray-400 ml-[6px]"></div>
                <div className="col-span-3 py-2">
                  Team, please submit food
                </div>{" "}
                <div>25-02-2020</div>
                <div>
                  <BsCircle className="mt-1" />
                </div>
                <div className="col-span-3 font-bold">Reminder</div>
                <div></div>
                <div className="border-l-2 border-gray-400 ml-[6px]"></div>
                <div className="col-span-3 py-2">Team, please submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
