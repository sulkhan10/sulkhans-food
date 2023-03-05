import { INGREDIENTS_FETCH_SUCCESS } from "./actionTypes";
let baseUrl = "https:/sulkhans-food-db.galangsakti.com/"

export let ingredientsFetchSuccess = (payload) => {
  return {
    type: INGREDIENTS_FETCH_SUCCESS,
    payload,
  };
};
