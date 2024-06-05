import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import MyCalendar from "./Component/Calender/MyCalender";
import Profile from "./Component/Profile/Profile";
import Dashboard from "./Component/Dashboard/Dashboard";
import Projects from "./Component/Projects/Projects";
import AddProjects from "./Component/Projects/AddProjects";
import Tasks from "./Component/Tasks/Tasks";
import AddTasks from "./Component/Tasks/AddTasks";
import Defects from "./Component/Defects/Defects";
import AddDefects from "./Component/Defects/AddDefects";
import Incidents from "./Component/Incidents/Incidents";
import AddIncidents from "./Component/Incidents/AddIncidents";
import Estimates from "./Component/Estimates/Estimates";
import AddEstimates from "./Component/Estimates/AddEstimates";
import Invoices from "./Component/Invoices/Invoices";
import AddInvoices from "./Component/Invoices/AddInvoices";
import Payments from "./Component/Payments/Payments";
import PaymentMethods from "./Component/Payments/PaymentMethods";
import Wrapper from "./Component/Wrapper/Wrapper";
import Roles from "./Component/Roles/Roles";
import Departments from "./Component/Departments/Departments";
import Teams from "./Component/Teams/Teams";
import TeamBoard from "./Component/Teams/TeamBoard";
import Users from "./Component/Users/Users";
import AddUsers from "./Component/Users/AddUsers";
import Leaves from "./Component/Leaves/Leaves";
import LeaveType from "./Component/Leaves/LeaveType";
import LeaveRequest from "./Component/Leaves/LeaveRequest";
import LeaveReport from "./Component/Leaves/LeaveReport";
import Holidays from "./Component/Holidays/Holidays";
import Timesheet from "./Component/TimeSheet/Timesheet";
import Items from "./Component/Items/Items";
import Taxes from "./Component/Taxes/Taxes";
import ProjectPlanner from "./Component/ProjectPlanner/ProjectPlanner";
import ProjectDetail from "./Component/ProjectPlanner/ProjectDetail";
import Meetings from "./Component/Meetings/Meetings";
import Appointments from "./Component/Appointments/Appointments";
import Providers from "./Component/Appointments/Providers";
import Clients from "./Component/Clients/Clients";
import AddClients from "./Component/Clients/AddClients";
import Reports from "./Component/Reports/Reports";
import Settings from "./Component/Settings/Settings";
import FileManager from "./Component/FileManager/FileManager";
import TaskBoards from "./Component/Tasks/TaskBoards";
import ToDo from "./Component/ToDo/ToDo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Wrapper />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/add-projects" element={<AddProjects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/task-boards" element={<TaskBoards/>}/>
            <Route path="/add-task" element={<AddTasks />} />
            <Route path="/defects" element={<Defects />} />
            <Route path="/add-defects" element={<AddDefects />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/add-incidents" element={<AddIncidents />} />
            <Route path="/estimates" element={<Estimates />} />
            <Route path="/add-estimates" element={<AddEstimates />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/add-invoices" element={<AddInvoices />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/team-board" element={<TeamBoard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-users" element={<AddUsers />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/leave-type" element={<LeaveType />} />
            <Route path="/leave-request" element={<LeaveRequest />} />
            <Route path="/leave-report" element={<LeaveReport />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/items" element={<Items />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/project-planner" element={<ProjectPlanner />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/add-clients" element={<AddClients />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/file-manager" element={<FileManager/>}/>
            <Route path="/to-do" element={<ToDo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
