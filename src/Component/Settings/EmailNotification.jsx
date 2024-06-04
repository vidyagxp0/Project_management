import { Checkbox } from '@mui/material'
import React from 'react'

const EmailNotification = () => {
  return (
    <>
    <div className='text-cyan-500 text-[18px] font-medium'> 
    Email Notifications
   </div>
   <div className="border border-b-gray-300 my-2"></div>

  <div>
    <table>
        <thead>
            <tr>
                <th>Notification</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Announcement Email</td>
                <td><Checkbox/></td>
            </tr>
        </tbody>
    </table>
  </div>
     
     <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl"> 
       <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
       <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Save</button>
       </div>
   </>
  )
}

export default EmailNotification
