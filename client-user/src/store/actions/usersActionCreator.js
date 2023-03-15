import { USER_FETCH_SUCCESS } from "./actionTypes";
let baseUrl = "https://sulkhans-db.galangsakti.shop/"


export let fetchUsers = () => {
  return (dispatch, getState) => {
    fetch(baseUrl+"users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(usersFetchSuccess(data));
      });
  };
};

export let deleteUser = (id) => {
  return (dispatch, getState) => {
    console.log("deleting....");
    fetch(baseUrl+"users/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then(function (res) {
        dispatch(fetchUsers());
      })
      .catch(function (res) {
        console.log(res);
      });
  };
};

export let createUser = (formItem) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formItem }),
    })
      .then(function (res) {
        console.log(res);
        dispatch(fetchUsers());
      })

      .catch(function (res) {
        console.log(res);
      });
  };
};

export let usersFetchSuccess = (payload) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload,
  };
};
