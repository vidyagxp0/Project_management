import React from 'react'

const CompanyDetails = () => {
  return (<>
    <div className=' text-cyan-500 text-[18px] font-medium'> 
      Company Details
    </div>
    <div className="border border-b-gray-300 my-2"></div>

<div className='grid grid-cols-3 gap-5 '>
    <div className='group-input'>
        <label>Company Name</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Legal Name</label>
        <input/>
    </div><div className='group-input'>
        <label>Short Name</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Company Email</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Company Phone</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Company Website</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Company Country</label>
        <select>
            <option>--Select Country--</option>
            <option>India</option>
            <option>USA</option>
        </select>
    </div>
    <div className='group-input'>
        <label>City</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Zip Code</label>
        <input/>
    </div>
    <div className='group-input'>
        <label>Contact Person </label>
        <input/>
    </div><div className='group-input'>
        <label>Company Address</label>
        <textarea/>
    </div>
</div>

<div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
        <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
        </div>
    </>) 
}

export default CompanyDetails
