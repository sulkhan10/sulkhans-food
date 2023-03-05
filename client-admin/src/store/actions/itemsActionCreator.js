import { ITEMS_FETCH_SUCCESS } from "./actionTypes";
import Swal from "sweetalert2";
let baseUrl = "https://sulkhan10-production.up.railway.app/"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export let fetchItems = (search) => {
  return (dispatch, getState) => {
    console.log(search);
    let url = baseUrl+"items?search=" + search;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        Toast.fire({
          icon: "success",
          title: `Data Fetched Successfully`,
        });
        dispatch(itemsFetchSuccess(data));
      });
  };
};

export let fetchItemById = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("http://localhost:8000/items/" + id);
      let data = await res.json();
      console.log(data);
      Toast.fire({
        icon: "success",
        title: `Data ${data.name} Fetched Successfully`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let deleteItem = (id) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"items/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        await Swal.fire(
          "Deleted!",
          "Your data item has been deleted.",
          "success"
        );
        dispatch(fetchItems());
      })
      .catch(function (response) {
        console.log(response);
      });
    return;
  };
};

export let createItem = (formItem) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"items", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        method: "POST",
        body: JSON.stringify({ ...formItem }),
      });
      data = await data.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let editItem = (formItem, id) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"items/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        method: "PUT",
        body: JSON.stringify({ ...formItem }),
      });
      setTimeout(() => {
        Swal.fire("Updated!", "Your Data Item Has Been Updated.", "success");
      }, 1000);

      dispatch(fetchItems());
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let itemsFetchSuccess = (payload) => {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload,
  };
};
