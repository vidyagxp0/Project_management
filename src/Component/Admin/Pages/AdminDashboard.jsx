import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { FiUsers, FiClipboard, FiCheckCircle } from "react-icons/fi";

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63"];

const taskData = [
  { name: "Completed", value: 40 },
  { name: "Pending", value: 30 },
  { name: "In Progress", value: 20 },
  { name: "Overdue", value: 10 },
];

const barData = [
  { month: "Jan", tasks: 20 },
  { month: "Feb", tasks: 35 },
  { month: "Mar", tasks: 45 },
  { month: "Apr", tasks: 30 },
  { month: "May", tasks: 50 },
];

const AdminDashboard = () => {
  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 flex items-center rounded-lg">
          <FiUsers className="text-blue-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-gray-600 text-lg">1,234</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 flex items-center rounded-lg">
          <FiClipboard className="text-yellow-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Projects</h3>
            <p className="text-gray-600 text-lg">57</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 flex items-center rounded-lg">
          <FiCheckCircle className="text-green-500 text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Completed Tasks</h3>
            <p className="text-gray-600 text-lg">324</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Task Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={taskData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {taskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tasks Completed (Monthly)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
