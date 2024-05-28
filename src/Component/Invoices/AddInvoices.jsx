import React from 'react'
import Header from '../Header/Header'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '@mui/material'

const AddInvoices = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/invoices")}>Invoices</span>
          <span>/</span>
          <span>Add Invoices</span>
        </div>

        <div className="grid grid-cols-2 p-2 gap-5">
          <div className="p-4 shadow-2xl ">
            <div className="py-2 font-medium">Create Invoices</div>
            <div className="flex py-2 border border-b-gray-500">
              Customer Info
            </div>
            <div className='grid grid-cols-2 gap-5 py-3 '>

            <div className=" group-input">
              <label>Project</label>
            <select>
              <option>--Select--</option>
              <option>QMS</option>
              <option>TMS</option>
            </select>
            </div>
            <div className=" group-input">
              <label>Customer</label>
            <select>
              <option>--Select--</option>
              <option>Pankaj</option>
              <option>Gaurav</option>
            </select>
            </div>
            </div>
            <div className="flex py-2 border border-b-gray-500">
             Dates
            </div>

            <div className="grid grid-cols-2 py-3 gap-5">
              <div className="group-input">
                <label> Invoice Date </label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label> Expiry Date </label>
                <input type="date" />
              </div>
            
            </div>
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex py-2 border border-b-gray-500">
              Other Info
            </div>
            <div className="grid grid-cols-2 pt-5 gap-5">
            <div className="group-input">
                <label> Refrence  </label>
                <input type="text" />
              </div>
           
              <div className="group-input">
                <label>Discount Type  </label>
                <select>
                  <option>--Select--</option>
                  <option>Percent</option>
                  <option>Fixed </option>
                </select>
              </div>
              <div className="group-input">
               <label>Recurrence</label>
               <Checkbox/>
              </div>
            </div>

            
          </div>
        </div>

       

        <div className="p-2 shadow-2xl">
          <div className="py-2 border border-b-gray-500">Description</div>
          <div className="py-3 group-input">
            <label>Description</label>
            <textarea></textarea>
          </div>
        </div>
        <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl">
          <button className="border border-gray-400 rounded-full px-4 py-2">
            Cancel
          </button>
          <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddInvoices
