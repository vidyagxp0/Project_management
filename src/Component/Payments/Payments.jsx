  import React, { useState } from 'react'
  import Header from '../Header/Header';
  import { FaHome } from 'react-icons/fa';
  import { RiAddFill } from 'react-icons/ri';
  import { BsThreeDotsVertical } from 'react-icons/bs';
  import { useNavigate } from 'react-router-dom';
  import { VscSymbolMethod } from 'react-icons/vsc';
  import SideBar from '../SideBar/SideBar';
import Paginations from '../Pagination/Paginations';

  const Payments = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
    const [currentPage,setCurrentPage]=useState(1)
const [data,setData]=useState( [
  {
    id: "abc001",
    payment:"PAY001",
    client: "Pankaj ",
    date: "22-05-2024",
    paymentMode: "25-05-2024",
    amount: 5,
  
    status: "Successful",
  },
  {
    id: "abc002",
    payment:"PAY005",
    client: "Amit Patel ",
    date: "22-05-2024",
    paymentMode: "25-05-2024",
    amount: 10,
  
    status: "Failed",
  },
  {
    id: "abc003",
    payment:"PAY002",
    client: "Mayank",
    date: "22-05-2024",
    paymentMode: "25-05-2024",
    amount: 25,
  
    status: "Successful",
  },
  {
    id: "abc004",
    payment:"PAY004",
    client: "Gaurav",
    date: "22-05-2024",
    paymentMode: "25-05-2024",
    amount: 50,
  
    status: "Successful",
  },
  {
    id: "abc005",
    payment:"PAY003",
    client: "Shubham",
    date: "22-05-2024",
    paymentMode: "25-05-2024",
    amount: 33,

    status: "Failed",
  },
])
    

    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };

    const handleEdit = () => {
      navigate("/add-estimates");
    };

    const handleDelete = (index) => {
    const newData=[...data]
    newData.splice(index,1)
    setData(newData)
    setShowMenu(null)
    };
    const handlePageChange=(newPage)=>{
      setCurrentPage(newPage)
    }
    const itemsPerPage=3;
    const totalItems=Math.ceil(data.length/itemsPerPage)
    return (
     
      
      <div>
         
      <Header />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Payments</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Payments</div>
            <div className="flex gap-4">
            
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <VscSymbolMethod onClick={() => navigate("/payment-methods")} />
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
                  <th>Payment#</th>
                  <th>Invoice#</th>
                  <th className="w-[200px]">Client</th>
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
                      <td>{item.payment}</td>
                      <td>{item.id}</td>
                      <td>{item.client}</td>
                      <td>
                        {item.date}
                      </td>
                      <td>{item.paymentMode}</td>
                      <td>${item.amount}</td>
                    
                  
                      <td>
                        <div
                          className={` py-1 text-white min-w-10 rounded-full ${
                            item.status === "Failed"
                              ? "bg-red-400"
                              : item.status === "Partially Successful"
                              ? "bg-cyan-500"
                              : item.status === "Successful"
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
                            <div className="origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          <Paginations totalItems={totalItems} currentPage={currentPage} onPageChange={handlePageChange}/>
        </div>
      </div>
     
    </div>

    )
  }

  export default Payments
