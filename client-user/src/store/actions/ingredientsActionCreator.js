import { INGREDIENTS_FETCH_SUCCESS } from "./actionTypes";
let baseUrl = "https://sulkhans-db.galangsakti.shop/"

export let ingredientsFetchSuccess = (payload) => {
  return {
    type: INGREDIENTS_FETCH_SUCCESS,
    payload,
  };
};
