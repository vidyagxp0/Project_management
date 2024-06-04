import { Checkbox } from '@mui/material'
import React from 'react'
import { FaSlack } from 'react-icons/fa'

const Slack = () => {
  return (
    <>
     <div className=' text-cyan-500 text-[18px] font-medium'> 
     Slack
    </div>
    <div className="border border-b-gray-300 my-2"></div>
      <div className='grid grid-cols-2 gap-5 pb-3'>
        <div className='group-input'>
            <label>Slack Client Id</label>
            <input/>
        </div>
        <div className='group-input'>
            <label>Slack Client Secret</label>
            <input/>
        </div>
        <div className='group-input'>
            <label>Slack Redirct URL</label>
            <input/>
        </div>  
        <div className='group-input '>
            <label>Slack Status</label>
            <Checkbox/>
        </div>
        <div className='border border-gray-300 px-2 gap-2 py-1 flex items-center rounded justify-center'><FaSlack/> <span>Add To Slack</span></div>
      </div>
      <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
        <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
        </div>
    </>
  )
}

export default Slack
