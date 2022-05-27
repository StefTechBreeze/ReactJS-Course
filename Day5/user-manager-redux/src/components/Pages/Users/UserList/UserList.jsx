import { useContext } from "react";
import { AppContext } from "../../../../App";
import { UserItem } from "../UserItem/UserItem";

import "./UserList.css";

// const list = [
//   {
//     id: 1,
//     first_name: "Stefan",
//     last_name: "Radusi",
//     email: "radusi.stefan@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Corina",
//     last_name: "rus",
//     email: "rus.corina@gmail.com",
//   },
// ];

export const UserList = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="user-list">
      {state.userList.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};
