import { Checkbox } from '@mui/material'
import React from 'react'

const Invoice = () => {
  return (
    <>
    <div className=' text-cyan-500 text-[18px] font-medium'> 
   Invoice
   </div>
   <div className="border border-b-gray-300 my-2"></div>

  <div className='grid grid-cols-3 gap-5'>

  <div className='group-input'>
           <label> Invoice Prefix</label>
           <input/>
       </div>
       <div className='group-input'>
           <label>Due After (Days)</label>
           <input type='number'/>
       </div>
  <div className='group-input'>
           <label>Auto Send Reminder?</label>
           <Checkbox/>
       </div>
       <div className='group-input'>
           <label>Send Remind Before (Days) </label>
         <input/>
       </div>
       <div className='group-input'>
           <label>Show GST Number On Invoice?</label>
           <Checkbox/>
       </div>
       <div className='group-input'>
           <label>GST Number </label>
         <input/>
       </div>
       <div className='group-input'>
           <label> Client Note</label>
           <textarea/>
       </div>
       <div className='group-input'>
           <label> Terms & Conditions</label>
           <textarea/>
       </div>

       <div className='group-input'>
           <label> Invoice Logo</label>
           <input type='file'/>
       </div>
  </div>
     
     <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
       <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
       <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
       </div>
   </>
  )
}

export default Invoice
