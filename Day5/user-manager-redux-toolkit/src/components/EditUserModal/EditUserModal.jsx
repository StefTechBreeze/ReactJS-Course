import { useDispatch, useSelector } from "react-redux";
import { addUser as addUserApi, updateUser as updateUserApi } from "../../api";
import {
  resetCurrentUser,
  setField,
} from "../../redux/slices/currentUserSlice";
import { hide } from "../../redux/slices/popUpSlice";
import { addUser, updateUser } from "../../redux/slices/userListSlice";
import {
  show as showLoading,
  hide as hideLoading,
} from "../../redux/slices/loadingSlice";

import "./EditUserModal.css";

export const EditUserModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.popUp.show);
  const { id, last_name, first_name, email } =
    useSelector((state) => state.currentUser) || {};

  return show ? (
    <div className="edit-user-modal">
      <form
        className="edit-user-modal__content"
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault();
          const payload = { last_name, first_name, email };
          dispatch(showLoading());
          if (id) {
            updateUserApi({ ...payload, id })
              .then(() => {
                dispatch(updateUser({ ...payload, id }));
              })
              .finally(() => dispatch(hideLoading()));
          } else {
            addUserApi(payload)
              .then(({ id }) => {
                dispatch(addUser({ ...payload, id }));
              })
              .finally(() => dispatch(hideLoading()));
          }
          dispatch(hide());
          dispatch(resetCurrentUser());
        }}
      >
        <div className="edit-user-modal__field">
          <label>First Name:</label>
          <input
            required
            value={first_name}
            onChange={(event) => {
              dispatch(
                setField({
                  name: "first_name",
                  value: event.target.value,
                })
              );
            }}
          />
        </div>
        <div className="edit-user-modal__field">
          <label>Last Name:</label>
          <input
            required
            value={last_name}
            onChange={(event) => {
              dispatch(
                setField({
                  name: "last_name",
                  value: event.target.value,
                })
              );
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
              dispatch(
                setField({
                  name: "email",
                  value: event.target.value,
                })
              );
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
