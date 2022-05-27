import { useDispatch } from "react-redux";
import { show } from "../../../redux/slices/popUpSlice";
import { UserList } from "./UserList/UserList";

import "./Users.css";

export const Users = () => {
  const dispatch = useDispatch();

  return (
    <section className="users-page page">
      <button
        className="create-user"
        onClick={() => {
          dispatch(show());
        }}
      >
        CREATE USER
      </button>
      <UserList />
    </section>
  );
};
