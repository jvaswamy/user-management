import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">User Management DashBoard</h1>
      <UserList />
    </Container>
  );
};

export default App;
