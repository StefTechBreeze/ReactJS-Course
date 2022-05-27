import { useContext } from "react";
import { AppContext } from "../../../../App";
import "./UserItem.css";

export const UserItem = ({ id, first_name, last_name, email }) => {
  const { dispatch } = useContext(AppContext);

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
            dispatch({
              type: "open-update-pup-up",
            });
            dispatch({
              type: "set-current-selected-user-values",
              payload: {
                id,
                first_name,
                last_name,
                email,
              },
            });
          }}
        />
        <img
          alt=""
          src="/svg/bin.svg"
          onClick={() => {
            dispatch({
              type: "remove-user",
              payload: id,
            });
          }}
        />
      </div>
    </div>
  );
};
