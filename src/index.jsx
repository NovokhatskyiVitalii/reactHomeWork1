import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Modal from "./components/Modal";
import UserList from "./components/UserList";
import { userData } from "./data/userData";

function App() {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Header setUsers={setUsers} />
      <UserList users={users} setSelectedUser={setSelectedUser} />
      <Modal user={selectedUser} setSelectedUser={setSelectedUser} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
