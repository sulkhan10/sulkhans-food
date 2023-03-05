import { ITEMS_FETCH_SUCCESS } from "./actionTypes";
// let baseUrl = "https:/sulkhans-food-db.galangsakti.com/"
// let baseUrl = "https://18.210.13.117/"
let baseUrl = "https://sulkhan10-production.up.railway.app/"

export let fetchItems = (search) => {
  return (dispatch, getState) => {
    let url = baseUrl+"items?search=" + search;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(itemsFetchSuccess(data));
      });
  };
};

export let fetchItemById = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(baseUrl+"items/" + id);
      let data = res.json();
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
      },
      method: "DELETE",
    })
      .then(function (res) {
        dispatch(fetchItems());
      })
      .catch(function (res) {
        console.log(res);
      });
  };
};

export let createItem = (formItem) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"items", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formItem }),
    })
      .then(function (res) {
        dispatch(fetchItems());
      })

      .catch(function (res) {
        console.log(res);
      });
  };
};
export let editItem = (formItem, id) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"items/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ ...formItem }),
      });
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
