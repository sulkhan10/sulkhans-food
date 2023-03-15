import { CATEGORIES_FETCH_SUCCESS } from "./actionTypes";
// let baseUrl = "https:/sulkhans-food-db.galangsakti.com/"
// let baseUrl = "https://18.210.13.117/"
let baseUrl = "https://sulkhans-db.galangsakti.shop/"


es = () => {
  return (dispatch, getState) => {
    fetch(baseUrl+"categories")
      .then((response) => response.json())
      .then((data) => {
        dispatch(categoriesFetchSuccess(data));
      });
  };
};

export let deleteCategory = (id) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"categories/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then(function (res) {
        dispatch(fetchCategories());
      })
      .catch(function (res) {
        console.log(res);
      });
  };
};

export let createCategory = (name) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"categories", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name }),
    })
      .then(function (res) {
        console.log(res);
        dispatch(fetchCategories());
      })

      .catch(function (res) {
        console.log(res);
      });
  };
};

export let categoriesFetchSuccess = (payload) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload,
  };
};
