import { USER_FETCH_SUCCESS } from "./actionTypes";
let baseUrl = "https://sulkhan10-production.up.railway.app/"

export let fetchUsers = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8000/users")
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
        access_token: localStorage.access_token,
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

export let createUser = (form) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        method: "POST",
        body: JSON.stringify({ ...form }),
      });
      data = data.json();
      dispatch(fetchUsers());
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let login = (form) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ...form }),
      });
      data = data.json();
      dispatch(fetchUsers());

      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let usersFetchSuccess = (payload) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload,
  };
};
