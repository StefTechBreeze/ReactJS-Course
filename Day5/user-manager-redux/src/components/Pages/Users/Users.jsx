import { UserList } from "./UserList/UserList";

import "./Users.css";

export const Users = () => {
  return (
    <section className="users-page page">
      <button className="create-user">CREATE USER</button>
      <UserList />
    </section>
  );
};
