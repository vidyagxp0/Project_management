

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Manager", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", role: "User", email: "bob@example.com" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("User");

  // Open modal for adding/editing user
  const openModal = (user = null) => {
    if (user) {
      setEditMode(true);
      setSelectedUser(user);
      setUserName(user.name);
      setUserEmail(user.email);
      setUserRole(user.role);
    } else {
      setEditMode(false);
      setSelectedUser(null);
      setUserName("");
      setUserEmail("");
      setUserRole("User");
    }
    setIsModalOpen(true);
  };

  // Handle adding new user
  const handleAddUser = () => {
    if (!userName || !userEmail) {
      toast.error("Please fill all fields!");
      return;
    }
    const newUser = {
      id: users.length + 1,
      name: userName,
      email: userEmail,
      role: userRole,
    };
    setUsers([...users, newUser]);
    toast.success("User added successfully!");
    setIsModalOpen(false);
  };

  // Handle editing user
  const handleEditUser = () => {
    if (!userName || !userEmail) {
      toast.error("Please fill all fields!");
      return;
    }
    setUsers(
      users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, name: userName, email: userEmail, role: userRole }
          : user
      )
    );
    toast.success("User updated successfully!");
    setIsModalOpen(false);
  };

  // Handle deleting user
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully!");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
      >
        <FaUserPlus /> Add User
      </button>

      <table className="w-full mt-4 bg-white shadow-md rounded">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b text-center">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 flex justify-center gap-3">
                <button
                  className="text-green-500 hover:text-green-600"
                  onClick={() => openModal(user)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">{editMode ? "Edit User" : "Add New User"}</h2>
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-2 border rounded mb-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-3"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <select
              className="w-full p-2 border rounded mb-3"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={editMode ? handleEditUser : handleAddUser}
              >
                {editMode ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ManageUsers;
