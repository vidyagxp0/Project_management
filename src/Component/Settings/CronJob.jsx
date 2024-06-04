import { Checkbox } from '@mui/material'
import React from 'react'

const CronJob = () => {
  return (
    <>
    <div className=' text-cyan-500 text-[18px] font-medium'> 
   Cron Job
   </div>
   <div className="border border-b-gray-300 my-2"></div>

  <div className='grid grid-cols-2 gap-5'>
  <div className='group-input'>
           <label>Active CronJob</label>
           <Checkbox/>
           <span>This enables the cronjob feature, if it is setup correctly.</span>
       </div>
       <div className='group-input'>
           <label>Automatic Backup Database </label>
           <Checkbox/>
           <span>Creates a database backup every 7 days. Requires cronjob to be activated!</span>
       </div>
       <div className='group-input'>
           <label> Reminder Alert Before Hours</label>
           <input/>
       </div>
       <div className='group-input'>
           <label> Reminder Alert Before Days</label>
           <input/>
       </div>
       <div className='group-input'>
           <label> Daily Report Emails</label>
           <input/>
       </div>

       <div className='group-input'>
           <label> Last CronJob Run</label>
           <span>07-07-2024  14:45</span>
       </div>
  </div>
     
     <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
       <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
       <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
       </div>
   </>
  )
}

export default CronJob
