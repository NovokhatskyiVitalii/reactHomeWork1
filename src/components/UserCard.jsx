import React from "react";

function UserCard({ user, setSelectedUser }) {
  return (
    <div className="card-block">
      <div
        className="user-card"
        onClick={() => {
          setSelectedUser(user);
        }}
      >
        <div className="user-info">
          <span>Name: {user.name}</span>
          <span>Age: {user.age}</span>
          <span>Gender: {user.gender}</span>
          <span>Balance: {user.balance}</span>
        </div>
        <div className="user-photo">
          <img src={user.picture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
