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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<MyCalendar/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/projects" element={<Projects/>  }/>
          <Route path="/add-projects" element={<AddProjects/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/add-task" element={<AddTasks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
