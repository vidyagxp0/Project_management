import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';

import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSidebar';


const AdminWrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
  
    const handleMenuClick = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    const isLoginPage = location.pathname === '/admin';
  
    return (
      <div className="flex flex-col">
        {!isLoginPage && (
          <>
            <div className="fixed-header">
              <AdminHeader onMenuClick={handleMenuClick} />
            </div>
            <AdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </>
        )}
        <div className={`content mt-20 flex-grow ${sidebarOpen && !isLoginPage ? 'ml-64' : 'ml-0'}`}>
          <Outlet />
        </div>
      </div>
    );
}

export default AdminWrapper
