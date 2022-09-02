import React from "react";
import UserCard from "./UserCard";

function UserList({ users, setSelectedUser }) {
  const renderedUsers = users.map((user) => (
    <UserCard key={user._id} user={user} setSelectedUser={setSelectedUser} />
  ));

  return <div className="container-cards">{renderedUsers}</div>;
}

export default UserList;
