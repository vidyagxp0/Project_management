import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome, FaList } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCodePullRequest } from "react-icons/fa6";
import Paginations from "../Pagination/Paginations";

const LeaveReport = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [currentPage,setCurrentPage]=useState(1)
  const data = [
    {
      id: "1",
      user: "Pankaj Jat ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "2",
      user: "Gaurav ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "3",
      user: " Mayank ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "4",
      user: "Pankaj Jat ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "5",
      user: "Manish  ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "6",
      user: "Shubham  ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "7",
      user: " Shivam ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
    {
      id: "8",
      user: "Pankaj Jat ",
      Pending: 1,
      approved: 2,
      taken: 0,
    },
  ];
  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
    navigate("/add-defects");
  };

  const handleDelete = () => {
    // Implement delete functionality
  };
  const itemsPerPage=3;
  const totalItems=Math.ceil(data.length/itemsPerPage)
  const handlePageChange=(newPage)=>{
    setCurrentPage(newPage)
  }
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Leave Report</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Leave Report</div>
            <div className="flex gap-4">
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={()=>navigate("/leaves")}>
              <FaList   />
            </div>
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leave-request")}>
                <FaCodePullRequest  />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>

          <div className="flex justify-between pt-4">
            <div>
              <label> Show </label>
              <input className="border border-b-black" />
            </div>

            <div>
              <label>Search </label>
              <input className="border border-b-black" />
            </div>
          </div>

          <div className="py-4">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>User</th>
                  <th>Pending</th>
                  <th>Approved</th>
                  <th>Taken</th>
                </tr>
              </thead>
              <tbody>
                {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.user}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-2 bg-cyan-400 text-white rounded-full flex items-center justify-center">
                            {item.Pending}
                          </div>
                          View
                        </div>
                      </td>

                      <td>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-2 bg-yellow-400 rounded-full text-white flex items-center justify-center">
                            {item.approved}
                          </div>
                          View
                        </div>
                      </td>

                      <td className="flex items-center gap-2">
                        <div className="px-3 py-2 bg-green-400 rounded-full text-white flex items-center justify-center">
                          {item.taken}
                        </div>
                        View
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Paginations onPageChange={handlePageChange} totalItems={totalItems} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  );
};

export default LeaveReport;
