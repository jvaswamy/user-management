import React, { useEffect, useState } from "react";
import { Table, Button, Alert, Spinner } from "react-bootstrap";
import UserForm from "../UserForm";
import {
  fetchUsers,
  addUser,
  editUser,
  deleteUser,
} from "../../services/api.js";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  const handleShowModal = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSave = async (userData) => {
    console.log(userData);
    try {
      if (modalType === "add") {
        const newUser = await addUser(userData);
        setUsers([...users, newUser]);
      } else {
        const updatedUser = await editUser(userData);
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
      }
      setShowModal(false);
    } catch (err) {
      setError("Failed to save user.");
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Button className="mb-3" onClick={() => handleShowModal("add")}>
            Add User
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => handleShowModal("edit", user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <UserForm
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSave}
        modalType={modalType}
        user={selectedUser}
      />
    </div>
  );
};

export default UserList;
