import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Paginations from '../Pagination/Paginations';

const Invoices = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
    const [currentPage,setCurrentPage]=useState(1)
  const [data,setData]=useState( [
    {
      id: "abc001",
      customer: "Pankaj ",
      date: "22-05-2024",
      validTill: "25-05-2024",
      amount: 5,
     
      status: "Paid",
    },
    {
      id: "abc002",
      customer: "Amit Patel ",
      date: "22-05-2024",
      validTill: "25-05-2024",
      amount: 10,
     
      status: "Unpaid",
    },
    {
      id: "abc003",
      customer: "Mayank",
      date: "22-05-2024",
      validTill: "25-05-2024",
      amount: 25,
     
      status: "Partially Paid",
    },
    {
      id: "abc004",
      customer: "Gaurav",
      date: "22-05-2024",
      validTill: "25-05-2024",
      amount: 50,
     
      status: "Paid",
    },
    {
      id: "abc005",
      customer: "Shubham",
      date: "22-05-2024",
      validTill: "25-05-2024",
      amount: 33,
   
      status: "Unpaid",
    },
  ])
    
  
    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };
  
    const handleEdit = () => {
      // navigate("/add-estimates");
    };
  
    const handleDelete = (index) => {
    const newData=[...data]
    newData.splice(index,1)
    setData(newData)
    setShowMenu(null)
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
        <span>Invoices</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Invoices</div>
          <div className="flex gap-4">
          
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
              <RiAddFill onClick={() => navigate("/add-invoices")} />
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
                <th>Invoice#</th>
                <th className="w-[200px]">Customer</th>
                <th> Date</th>
                <th> Due Date</th>
                <th>Amount</th>
              
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.customer}</td>
                    <td>
                      {item.date}
                    </td>
                    <td>{item.validTill}</td>
                    <td>${item.amount}</td>
                   
                 
                    <td>
                      <div
                        className={` py-1 text-white min-w-10 rounded-full ${
                          item.status === "Unpaid"
                            ? "bg-red-400"
                            : item.status === "Partially Paid"
                            ? "bg-cyan-500"
                            : item.status === "Paid"
                            ? "bg-green-500"
                            : ""
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            onClick={() => handleMenuClick(index)}
                            type="button"
                            className="flex items-center justify-center hover:border border-gray-200 rounded-full h-5 focus:outline-none"
                          >
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                        {/* Menu */}
                        {showMenu === index && (
                          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                              className="py-1 px-2 "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <button
                                onClick={handleEdit}
                                className="block w-full  px-4 py-2 rounded text-sm text-center text-gray-700 hover:bg-yellow-300 hover:text-white"
                                role="menuitem"
                              >
                                Edit
                              </button>
                              <button
                                onClick={handleDelete}
                                className="block w-full text-center px-4 py-2 text-sm rounded text-gray-700 hover:bg-red-500 hover:text-white"
                                role="menuitem"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Paginations onPageChange={handlePageChange} currentPage={currentPage} totalItems={totalItems}/>
      </div>
    </div>
  </div>
  )
}

export default Invoices
