// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// const RolesPermissions = () => {
//   const [roles, setRoles] = useState([
//     { id: 1, name: "Admin", permissions: "Full Access" },
//     { id: 2, name: "Manager", permissions: "Edit & View" },
//     { id: 3, name: "User", permissions: "View Only" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [roleName, setRoleName] = useState("");
//   const [rolePermissions, setRolePermissions] = useState("");

//   const handleAddRole = () => {
//     if (!roleName || !rolePermissions) {
//       toast.error("Please fill all fields!");
//       return;
//     }
//     const newRole = {
//       id: roles.length + 1,
//       name: roleName,
//       permissions: rolePermissions,
//     };
//     setRoles([...roles, newRole]);
//     toast.success("Role added successfully!");
//     setIsModalOpen(false);
//     setRoleName("");
//     setRolePermissions("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Roles & Permissions</h1>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
//       >
//         <FaPlus /> Add Role
//       </button>

//       <table className="w-full mt-4 bg-white shadow-md rounded">
//         <thead>
//           <tr className="bg-black text-white">
//             <th className="p-3">Role</th>
//             <th className="p-3">Permissions</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((role) => (
//             <tr key={role.id} className="border-b text-center">
//               <td className="p-3">{role.name}</td>
//               <td className="p-3">{role.permissions}</td>
//               <td className="p-3 flex justify-center gap-3">
//                 <button className="text-green-500 hover:text-green-600">
//                   <FaEdit />
//                 </button>
//                 <button className="text-red-500 hover:text-red-600">
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-2xl mb-4">Add New Role</h2>
//             <input
//               type="text"
//               placeholder="Role Name"
//               className="w-full p-2 border rounded mb-3"
//               value={roleName}
//               onChange={(e) => setRoleName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Permissions"
//               className="w-full p-2 border rounded mb-3"
//               value={rolePermissions}
//               onChange={(e) => setRolePermissions(e.target.value)}
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 onClick={handleAddRole}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// };

// export default RolesPermissions;


import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const RolesPermissions = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: "Full Access" },
    { id: 2, name: "Manager", permissions: "Edit & View" },
    { id: 3, name: "User", permissions: "View Only" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [rolePermissions, setRolePermissions] = useState("");
  const [editingRole, setEditingRole] = useState(null);

  const handleAddOrEditRole = () => {
    if (!roleName || !rolePermissions) {
      toast.error("Please fill all fields!");
      return;
    }

    if (editingRole) {
      // Update existing role
      setRoles(
        roles.map((role) =>
          role.id === editingRole.id
            ? { ...role, name: roleName, permissions: rolePermissions }
            : role
        )
      );
      toast.success("Role updated successfully!");
    } else {
      // Add new role
      const newRole = {
        id: roles.length + 1,
        name: roleName,
        permissions: rolePermissions,
      };
      setRoles([...roles, newRole]);
      toast.success("Role added successfully!");
    }

    // Close modal and reset state
    setIsModalOpen(false);
    setRoleName("");
    setRolePermissions("");
    setEditingRole(null);
  };

  const handleEdit = (role) => {
    setEditingRole(role);
    setRoleName(role.name);
    setRolePermissions(role.permissions);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== id));
      toast.success("Role deleted successfully!");
    }
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Roles & Permissions</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setEditingRole(null);
          setRoleName("");
          setRolePermissions("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
      >
        <FaPlus /> Add Role
      </button>

      <table className="w-full mt-4 bg-white shadow-md rounded">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3">Role</th>
            <th className="p-3">Permissions</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b text-center">
              <td className="p-3">{role.name}</td>
              <td className="p-3">{role.permissions}</td>
              <td className="p-3 flex justify-center gap-3">
                <button
                  className="text-green-500 hover:text-green-600"
                  onClick={() => handleEdit(role)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(role.id)}
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
            <h2 className="text-2xl mb-4">
              {editingRole ? "Edit Role" : "Add New Role"}
            </h2>
            <input
              type="text"
              placeholder="Role Name"
              className="w-full p-2 border rounded mb-3"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Permissions"
              className="w-full p-2 border rounded mb-3"
              value={rolePermissions}
              onChange={(e) => setRolePermissions(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddOrEditRole}
              >
                {editingRole ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default RolesPermissions;
