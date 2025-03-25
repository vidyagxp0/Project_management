// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { FiUserPlus, FiTrash2, FiEdit3 } from "react-icons/fi";
// import "react-toastify/dist/ReactToastify.css";

// const ManageAdmins = () => {
//   const [admins, setAdmins] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//   ]);

//   const handleDelete = (id) => {
//     setAdmins(admins.filter(admin => admin.id !== id));
//     toast.error("Admin removed successfully!", { position: "top-right" });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Admins</h1>
      
//       <div className="bg-white p-6 shadow rounded-xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-700">Admin List</h2>
//           <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             <FiUserPlus className="mr-2" /> Add Admin
//           </button>
//         </div>

//         <table className="w-full border-collapse bg-white shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Role</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {admins.map((admin) => (
//               <tr key={admin.id} className="border-b hover:bg-gray-100">
//                 <td className="p-3">{admin.name}</td>
//                 <td className="p-3">{admin.email}</td>
//                 <td className="p-3">{admin.role}</td>
//                 <td className="p-3 text-center flex justify-center space-x-4">
//                   <button className="text-green-600 hover:text-green-800">
//                     <FiEdit3 size={20} />
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDelete(admin.id)}
//                   >
//                     <FiTrash2 size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageAdmins;


// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { FiUserPlus, FiTrash2, FiEdit3, FiCheck, FiX } from "react-icons/fi";
// import "react-toastify/dist/ReactToastify.css";

// const ManageAdmins = () => {
//   const [admins, setAdmins] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//   ]);

//   const [newAdmin, setNewAdmin] = useState({ name: "", email: "", role: "" });
//   const [editingAdmin, setEditingAdmin] = useState(null);

//   // Function to add a new admin
//   const handleAddAdmin = () => {
//     if (!newAdmin.name || !newAdmin.email || !newAdmin.role) {
//       toast.error("Please fill all fields!", { position: "top-right" });
//       return;
//     }
//     setAdmins([...admins, { id: admins.length + 1, ...newAdmin }]);
//     setNewAdmin({ name: "", email: "", role: "" });
//     toast.success("Admin added successfully!", { position: "top-right" });
//   };

//   // Function to edit an admin
//   const handleEdit = (admin) => {
//     setEditingAdmin(admin);
//   };

//   const handleSaveEdit = () => {
//     setAdmins(
//       admins.map((admin) =>
//         admin.id === editingAdmin.id ? editingAdmin : admin
//       )
//     );
//     setEditingAdmin(null);
//     toast.success("Admin updated successfully!", { position: "top-right" });
//   };

//   // Function to delete an admin
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this admin?")) {
//       setAdmins(admins.filter((admin) => admin.id !== id));
//       toast.error("Admin removed successfully!", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Admins</h1>

//       {/* Add Admin Form */}
//       <div className="bg-white p-6 shadow rounded-xl mb-6">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Add New Admin</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={newAdmin.name}
//             onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//             className="border p-2 rounded-lg w-full"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newAdmin.email}
//             onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//             className="border p-2 rounded-lg w-full"
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             value={newAdmin.role}
//             onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
//             className="border p-2 rounded-lg w-full"
//           />
//           <button
//             onClick={handleAddAdmin}
//             className="col-span-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
//           >
//             <FiUserPlus className="mr-2" /> Add Admin
//           </button>
//         </div>
//       </div>

//       {/* Admin List */}
//       <div className="bg-white p-6 shadow rounded-xl">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Admin List</h2>

//         <table className="w-full border-collapse bg-white shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Role</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {admins.map((admin) => (
//               <tr key={admin.id} className="border-b hover:bg-gray-100">
//                 <td className="p-3">
//                   {editingAdmin?.id === admin.id ? (
//                     <input
//                       type="text"
//                       value={editingAdmin.name}
//                       onChange={(e) =>
//                         setEditingAdmin({ ...editingAdmin, name: e.target.value })
//                       }
//                       className="border p-2 rounded-lg w-full"
//                     />
//                   ) : (
//                     admin.name
//                   )}
//                 </td>
//                 <td className="p-3">
//                   {editingAdmin?.id === admin.id ? (
//                     <input
//                       type="email"
//                       value={editingAdmin.email}
//                       onChange={(e) =>
//                         setEditingAdmin({ ...editingAdmin, email: e.target.value })
//                       }
//                       className="border p-2 rounded-lg w-full"
//                     />
//                   ) : (
//                     admin.email
//                   )}
//                 </td>
//                 <td className="p-3">
//                   {editingAdmin?.id === admin.id ? (
//                     <input
//                       type="text"
//                       value={editingAdmin.role}
//                       onChange={(e) =>
//                         setEditingAdmin({ ...editingAdmin, role: e.target.value })
//                       }
//                       className="border p-2 rounded-lg w-full"
//                     />
//                   ) : (
//                     admin.role
//                   )}
//                 </td>
//                 <td className="p-3 text-center flex justify-center space-x-4">
//                   {editingAdmin?.id === admin.id ? (
//                     <>
//                       <button
//                         className="text-green-600 hover:text-green-800"
//                         onClick={handleSaveEdit}
//                       >
//                         <FiCheck size={20} />
//                       </button>
//                       <button
//                         className="text-gray-600 hover:text-gray-800"
//                         onClick={() => setEditingAdmin(null)}
//                       >
//                         <FiX size={20} />
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         className="text-green-600 hover:text-green-800"
//                         onClick={() => handleEdit(admin)}
//                       >
//                         <FiEdit3 size={20} />
//                       </button>
//                       <button
//                         className="text-red-600 hover:text-red-800"
//                         onClick={() => handleDelete(admin.id)}
//                       >
//                         <FiTrash2 size={20} />
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageAdmins;



import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FiUserPlus, FiTrash2, FiEdit3, FiX } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState({ id: null, name: "", email: "", role: "" });

  // Open modal for adding a new admin
  const openModal = () => {
    setCurrentAdmin({ id: null, name: "", email: "", role: "" });
    setIsEditing(false);
    setModalOpen(true);
  };

  // Open modal for editing an admin
  const openEditModal = (admin) => {
    setCurrentAdmin(admin);
    setIsEditing(true);
    setModalOpen(true);
  };

  // Handle adding or updating an admin
  const handleSubmit = () => {
    if (!currentAdmin.name || !currentAdmin.email || !currentAdmin.role) {
      toast.error("Please fill all fields!", { position: "top-right" });
      return;
    }

    if (isEditing) {
      setAdmins(admins.map((admin) => (admin.id === currentAdmin.id ? currentAdmin : admin)));
      toast.success("Admin updated successfully!", { position: "top-right" });
    } else {
      setAdmins([...admins, { id: admins.length + 1, ...currentAdmin }]);
      toast.success("Admin added successfully!", { position: "top-right" });
    }

    setModalOpen(false);
  };

  // Delete an admin with confirmation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setAdmins(admins.filter((admin) => admin.id !== id));
      toast.error("Admin removed successfully!", { position: "top-right" });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Admins</h1>

      {/* Add Admin Button */}
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
      >
        <FiUserPlus className="mr-2" /> Add Admin
      </button>

      {/* Admin List */}
      <div className="bg-white p-6 shadow rounded-xl mt-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Admin List</h2>

        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{admin.name}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3">{admin.role}</td>
                <td className="p-3 text-center flex justify-center space-x-4">
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => openEditModal(admin)}
                  >
                    <FiEdit3 size={20} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(admin.id)}
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form for Add/Edit Admin */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {isEditing ? "Edit Admin" : "Add Admin"}
              </h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-800">
                <FiX size={24} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={currentAdmin.name}
                onChange={(e) => setCurrentAdmin({ ...currentAdmin, name: e.target.value })}
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={currentAdmin.email}
                onChange={(e) => setCurrentAdmin({ ...currentAdmin, email: e.target.value })}
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <input
                type="text"
                value={currentAdmin.role}
                onChange={(e) => setCurrentAdmin({ ...currentAdmin, role: e.target.value })}
                className="border p-2 rounded-lg w-full"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isEditing ? "Update Admin" : "Add Admin"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;
