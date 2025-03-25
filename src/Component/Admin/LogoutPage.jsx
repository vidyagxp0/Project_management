import React from "react";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (modify as needed)
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/"); // Redirect to login page
    }, 1500);
  };

  return (
    <Modal
      title="Confirm Logout"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>Cancel</Button>,
        <Button key="logout" type="primary" danger onClick={handleLogout}>
          Logout
        </Button>,
      ]}
    >
      <p>Are you sure you want to log out?</p>
    </Modal>
  );
};

export default LogoutModal;
