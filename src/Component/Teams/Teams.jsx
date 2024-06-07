import { Avatar, AvatarGroup, Dialog } from '@mui/material';
import React, { useState } from 'react'
import { BsPersonRaisedHand, BsThreeDotsVertical } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import Paginations from '../Pagination/Paginations';

const Teams = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
const [currentPage,setCurrentPage]=useState(1)
    const [data, setData] = useState([
      {
        id: "abc001",
        teamName: "Next js ",
        members: [] ,     
        leader: "", 
      },
      {
        id: "abc002",
        teamName: "Flutter ",
        members: [],
        leader: "",
      },
      {
        id: "abc003",
        teamName: "Java",
        members: [],
        leader: "",
      },
      {
        id: "abc004",
        teamName: "Laravel",
        members: [],
        leader: "",
      },
      {
        id: "abc005",
        teamName: "React",
        members: [],
        leader: "",
      
      },
    ]);
   
  
    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };
  
    const handleEdit = () => {
      navigate("/add-defects");
    };
  
    const handleDelete = (index) => {
      const newData=[...data]
      newData.splice(index, 1)
      setData(newData)
      setShowMenu(null)
    };
    const handlePageChange=(newPage)=>{
      setCurrentPage(newPage)
    }
    const handleClose = () => {
        setIsOpen(false);
      };
      const itemsPerPage=3;
      const totalItems=Math.ceil(data.length/itemsPerPage)
  return (
    <div>
    <Header />
    <div className="p-4">
      <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
        <FaHome onClick={() => navigate("/dashboard")} />
        <span>/</span>
        <span>Teams</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Teams</div>
          <div className="flex gap-4">
          
          <div className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/team-board")}>
              <BsPersonRaisedHand  /> <span>Team Board</span>
            </div>
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
              <RiAddFill onClick={() => {setIsOpen(true)}} />
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
                <th >Team Name</th>
               <th>Members</th>
                <th>Leader</th>
               
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.teamName}</td>
                    <td>
                     <AvatarGroup>
                        {item.members?.map((el)=>{
                            return <Avatar src={el}/>
                        })}
                        </AvatarGroup> 
                    </td>
                   
                   
                <td className="flex justify-center items-center">
                      <Avatar src={item.leader}></Avatar>
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
        <Paginations onPageChange={handlePageChange} totalItems={totalItems} currentPage={currentPage}/>
      </div>
    </div>
    <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Teams</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Team Name</label>
              <input />
            </div>

           <div className='dual-group-input'>
           <div className="group-input">
              <label>Member</label>
             <select>
                <option>--Select Members---</option>
                <option>Pankaj jat</option>
                <option>Gaurav</option>
                <option>Mayank</option>
             </select>
            </div>

            <div className="group-input">
              <label>Leader</label>
              <select>
                <option>--Select Leader---</option>
                <option>Pankaj jat</option>
                <option>Gaurav</option>
                <option>Mayank</option>
             </select>
            </div>
           </div>

           <div className='group-input'>
            <label>Description</label>
            <textarea/>
           </div>
            
          </div>
          <div className="border-b-2 border-gray-400"></div>
          <div className="p-4">
            <div className="flex gap-5 justify-end">
              <button
                className="border border-gray-400 rounded-full px-4 py-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
        </div>
      </Dialog>
  </div>
  )
}

export default Teams
