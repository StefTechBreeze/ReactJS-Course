import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./EditUserModal.css";

export const EditUserModal = () => {
  const { state, dispatch } = useContext(AppContext);
  const { erros, setErros } = useState();
  console.log(state);
  const { id, last_name, first_name, email } = state.currentSelectedUser || {};

  return state.showUpdatePopUp ? (
    <div className="edit-user-modal">
      <form
        className="edit-user-modal__content"
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault();
          if (id) {
            dispatch({ type: "update-user" });
          } else {
            dispatch({ type: "create-user" });
          }
        }}
      >
        <div className="edit-user-modal__field">
          <label>First Name:</label>
          <input
            required
            value={first_name}
            onChange={(event) => {
              dispatch({
                type: "set-current-selected-user-values",
                payload: {
                  ...state.currentSelectedUser,
                  first_name: event.target.value,
                },
              });
            }}
          />
        </div>
        <div className="edit-user-modal__field">
          <label>Last Name:</label>
          <input
            required
            value={last_name}
            onChange={(event) => {
              dispatch({
                type: "set-current-selected-user-values",
                payload: {
                  ...state.currentSelectedUser,
                  last_name: event.target.value,
                },
              });
            }}
          />
        </div>
        <div className="edit-user-modal__field">
          <label>Email:</label>
          <input
            required
            value={email}
            type="email"
            onChange={(event) => {
              dispatch({
                type: "set-current-selected-user-values",
                payload: {
                  ...state.currentSelectedUser,
                  email: event.target.value,
                },
              });
            }}
          />
        </div>
        <button type="submit">
          {id === null ? "CREATE USER" : "UPDATE USER"}
        </button>
      </form>
    </div>
  ) : null;
};
