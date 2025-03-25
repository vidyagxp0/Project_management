// import { useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { FiBarChart2, FiFileText, FiUsers, FiActivity } from "react-icons/fi";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import "react-toastify/dist/ReactToastify.css";

// const data = [
//   { name: "Jan", tasks: 30 },
//   { name: "Feb", tasks: 45 },
//   { name: "Mar", tasks: 60 },
//   { name: "Apr", tasks: 50 },
//   { name: "May", tasks: 80 },
//   { name: "Jun", tasks: 70 },
// ];

// const AdminReports = () => {
//   useEffect(() => {
//     toast.success("Welcome to Admin Reports Dashboard!", { position: "top-right" });
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <ToastContainer /> {/* Add this line */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Reports</h1>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-6 shadow rounded-xl flex items-center space-x-4">
//           <FiBarChart2 className="text-blue-500 text-4xl" />
//           <div>
//             <p className="text-gray-500">Total Projects</p>
//             <h2 className="text-2xl font-bold">56</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl flex items-center space-x-4">
//           <FiFileText className="text-green-500 text-4xl" />
//           <div>
//             <p className="text-gray-500">Tasks Completed</p>
//             <h2 className="text-2xl font-bold">124</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl flex items-center space-x-4">
//           <FiUsers className="text-purple-500 text-4xl" />
//           <div>
//             <p className="text-gray-500">Team Members</p>
//             <h2 className="text-2xl font-bold">23</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl flex items-center space-x-4">
//           <FiActivity className="text-red-500 text-4xl" />
//           <div>
//             <p className="text-gray-500">Active Tasks</p>
//             <h2 className="text-2xl font-bold">8</h2>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="mt-10 p-6 bg-white shadow rounded-xl">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Task Completion Trend</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="tasks" stroke="#4F46E5" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AdminReports;


import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiBarChart2, FiFileText, FiUsers, FiActivity, FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AdminReports = () => {
  const [data, setData] = useState([
    { id: 1, name: "Jan", tasks: 30 },
    { id: 2, name: "Feb", tasks: 45 },
    { id: 3, name: "Mar", tasks: 60 },
    { id: 4, name: "Apr", tasks: 50 },
    { id: 5, name: "May", tasks: 80 },
    { id: 6, name: "Jun", tasks: 70 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    toast.success("Welcome to Admin Reports Dashboard!", { position: "top-right" });
  }, []);

  const handleAddOrEditTask = () => {
    if (!taskName || !taskValue) {
      toast.error("Please fill all fields!");
      return;
    }
    if (editingId) {
      setData(data.map(item => (item.id === editingId ? { ...item, name: taskName, tasks: Number(taskValue) } : item)));
      toast.info("Task updated successfully!");
    } else {
      setData([...data, { id: data.length + 1, name: taskName, tasks: Number(taskValue) }]);
      toast.success("Task added successfully!");
    }
    setIsModalOpen(false);
    setTaskName("");
    setTaskValue("");
    setEditingId(null);
  };

  const handleEdit = (task) => {
    setTaskName(task.name);
    setTaskValue(task.tasks);
    setEditingId(task.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
    toast.error("Task deleted!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Reports</h1>
      <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
        <FiPlus /> Add Task
      </button>
      
      {/* Task List Table */}
      <table className="w-full mt-4 bg-white shadow-md rounded">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3">Month</th>
            <th className="p-3">Tasks</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task) => (
            <tr key={task.id} className="border-b text-center">
              <td className="p-3">{task.name}</td>
              <td className="p-3">{task.tasks}</td>
              <td className="p-3 flex justify-center gap-3">
                <button className="text-green-500 hover:text-green-600" onClick={() => handleEdit(task)}><FiEdit /></button>
                <button className="text-red-500 hover:text-red-600" onClick={() => handleDelete(task.id)}><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Charts Section */}
      <div className="mt-10 p-6 bg-white shadow rounded-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Task Completion Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="tasks" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">{editingId ? "Edit Task" : "Add New Task"}</h2>
            <input
              type="text"
              placeholder="Month"
              className="w-full p-2 border rounded mb-3"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Number of Tasks"
              className="w-full p-2 border rounded mb-3"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddOrEditTask}>{editingId ? "Update" : "Save"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReports;
