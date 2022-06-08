import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../api";
import { UserItem } from "../UserItem/UserItem";
import { setUsers } from "../../../../redux/slices/userListSlice";

import "./UserList.css";
import { hide, show } from "../../../../redux/slices/loadingSlice";

export const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  useEffect(() => {
    dispatch(show());
    getUsers()
      .then((users) => {
        dispatch(setUsers(users));
      })
      .finally(() => dispatch(hide()));
  }, []);

  return (
    <div className="user-list">
      {userList.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};
