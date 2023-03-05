import { CATEGORIES_FETCH_SUCCESS } from "./actionTypes";
import Swal from "sweetalert2";
let baseUrl = "https://sulkhan10-production.up.railway.app/"

export let fetchCategories = () => {
  return (dispatch, getState) => {
    fetch(baseUrl+"categories")
      .then((response) => response.json())
      .then((data) => {
        dispatch(categoriesFetchSuccess(data));
      });
  };
};

export let fetchCategoryById = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(baseUrl+"categories/" + id);
      let data = res.json();
      console.log(res);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let deleteCategory = (id) => {
  return (dispatch, getState) => {
    fetch(baseUrl+"categories/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      method: "DELETE",
    })
      .then(function (res) {
        Swal.fire(
          "Success delete category",
          "Selected category has been deleted",
          "success"
        );
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
        access_token: localStorage.access_token,
      },
      method: "POST",
      body: JSON.stringify({ name }),
    })
      .then(function (res) {
        console.log(res);
        Swal.fire(
          "Success Create New Category",
          "New Category has been added",
          "success"
        );
        dispatch(fetchCategories());
      })

      .catch(function (res) {
        console.log(res);
      });
  };
};

export let editCategory = (form, id) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(baseUrl+"categories/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        method: "PUT",
        body: JSON.stringify({ ...form }),
      });
      Swal.fire(
        "Success Edit Category",
        "Category data has been updated",
        "success"
      );
      dispatch(fetchCategories());
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export let categoriesFetchSuccess = (payload) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload,
  };
};
