import "./EditUserModal.css";

export const EditUserModal = () => {
  return (
    <div className="edit-user-modal">
      <form className="edit-user-modal__content">
        <div className="edit-user-modal__field">
          <label>First Name:</label>
          <input />
        </div>
        <div className="edit-user-modal__field">
          <label>Last Name:</label>
          <input />
        </div>
        <div className="edit-user-modal__field">
          <label>Email:</label>
          <input />
        </div>
        <button type="submit">UPDATE USER</button>
      </form>
    </div>
  );
};
