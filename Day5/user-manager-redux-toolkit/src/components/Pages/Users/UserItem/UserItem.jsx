import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../../redux/slices/currentUserSlice";
import { show as showPopUp } from "../../../../redux/slices/popUpSlice";
import {
  show as showLoading,
  hide as hideLoading,
} from "../../../../redux/slices/loadingSlice";
import { removeUser } from "../../../../redux/slices/userListSlice";
import { removeUser as removeUserApi } from "../../../../api";

import "./UserItem.css";

export const UserItem = ({ id, first_name, last_name, email }) => {
  const dispatch = useDispatch();

  return (
    <div className="user-item">
      <div className="user-item__details">
        <div className="user-item__field">
          <img alt="" src="/svg/user-name.svg" />
          <p>{`${first_name} ${last_name}`}</p>
        </div>
        <div className="user-item__field">
          <img alt="" src="/svg/email.svg" />
          <p>{email}</p>
        </div>
      </div>
      <div className="user-item__actions">
        <img
          alt=""
          src="/svg/edit.svg"
          onClick={() => {
            dispatch(showPopUp());
            dispatch(setCurrentUser({ id, first_name, last_name, email }));
          }}
        />
        <img
          alt=""
          src="/svg/bin.svg"
          onClick={() => {
            dispatch(showLoading());
            removeUserApi(id)
              .then(() => dispatch(removeUser(id)))
              .finally(() => dispatch(hideLoading()));
          }}
        />
      </div>
    </div>
  );
};
