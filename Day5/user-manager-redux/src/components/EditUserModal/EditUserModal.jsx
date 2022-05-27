import { useContext } from "react";
import { AppContext } from "../../App";
import "./EditUserModal.css";

export const EditUserModal = () => {
  const { state, dispatch } = useContext(AppContext);

  return state.showUpdatePopUp ? (
    <div className="edit-user-modal">
      <form
        className="edit-user-modal__content"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: "close-update-pup-up" });
        }}
      >
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
  ) : null;
};
