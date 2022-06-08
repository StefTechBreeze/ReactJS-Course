export const getUsers = () =>
  fetch("https://contact-agenda-rest-api.herokuapp.com/users").then((r) =>
    r.json()
  );

export const removeUser = (id) =>
  fetch("https://contact-agenda-rest-api.herokuapp.com/users/" + id, {
    method: "DELETE",
  });

export const addUser = (user) =>
  fetch("https://contact-agenda-rest-api.herokuapp.com/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((r) => r.json());

export const updateUser = (user) =>
  fetch(`https://contact-agenda-rest-api.herokuapp.com/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
