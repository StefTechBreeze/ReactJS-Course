import { useContext } from "react";
import { AppContext } from "../../../App";
import { UserList } from "./UserList/UserList";

import "./Users.css";

export const Users = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <section className="users-page page">
      <button
        className="create-user"
        onClick={() => {
          dispatch({ type: "open-update-pup-up" });
        }}
      >
        CREATE USER
      </button>
      <UserList />
    </section>
  );
};
