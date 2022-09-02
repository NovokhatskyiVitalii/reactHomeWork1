import React, { useCallback, useEffect } from "react";

function Modal({ user, setSelectedUser }) {
  const closeModal = useCallback(() => {
    setSelectedUser(null);
  }, [setSelectedUser]);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          closeModal();
        }
      },
      false
    );
  }, [closeModal]);

  if (!user) {
    return null;
  }

  return (
    <div
      className="background-modal"
      onClick={(event) => {
        closeModal();
      }}
    >
      <div className="modal">
        <div className="user-info">
        <span>Name: {user.name}</span>
        <span>Gender: {user.gender}</span>
        <span>Age: {user.age}</span>
        <span>Phone: {user.phone}</span>
        <span>Email: {user.email}</span>
        <span>Address: {user.address}</span>
        <span>Balance: {user.balance}</span>
        <span>Company: {user.company}</span>
        </div>
        <div className="user-photo">
          <img src={user.picture} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Modal;
