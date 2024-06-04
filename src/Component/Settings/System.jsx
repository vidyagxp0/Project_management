import { Checkbox } from '@mui/material'
import React from 'react'

const System = () => {
  return (
    <>
    <div className=' text-cyan-500 text-[18px] font-medium'> 
      System
    </div>
    <div className="border border-b-gray-300 my-2"></div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='group-input'>
            <label>Timezone</label>
            <select>
                <option>(GMT-11:00) Midway Island</option>
                <option>(GMT-11:00) Alaska</option>
                <option>(GMT-11:00) Hawaii</option>
            </select>
        </div>
        <div className='group-input'>
            <label>Default Language</label>
            <select>
                <option>Russian</option>
                <option>English</option>
                <option>Chinese</option>
            </select>
        </div>
        <div className='group-input'>
            <label>Default Currency</label>
            <select>
                <option>Dollar</option>
                <option>Rupee</option>
                <option>Ruble</option>
            </select>
        </div>
        <div className='group-input'>
            <label>Tables Pagination Limit</label>
            <input/>
        </div>
        <div className='group-input'>
            <label>Date Format</label>
            <select>
                <option>06-24-2024</option>
                <option>24-06-2024</option>
                <option>4-6-24</option>
            </select>
        </div>
        <div className='group-input'>
            <label>Time Format</label>
            <select>
                <option>12 Hours</option>
                <option>24 Hours</option>
               
            </select>
        </div>
        <div className='group-input'>
            <label>Allowed For Registration?</label>
            <Checkbox/>
        </div>
      </div>

    <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
        <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
        </div>
    </>
  )
}

export default System
