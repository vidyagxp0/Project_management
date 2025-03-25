
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSave, FaUserCog, FaLock } from "react-icons/fa";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    username: "admin",
    email: "admin@example.com",
    password: "",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
            <FaUserCog /> Username
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={settings.username}
            onChange={(e) => setSettings({ ...settings, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
            <FaUserCog /> Email
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
            <FaLock /> New Password
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={settings.password}
            onChange={(e) => setSettings({ ...settings, password: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 w-full"
          onClick={handleSave}
        >
          <FaSave /> Save Settings
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AdminSettings;
