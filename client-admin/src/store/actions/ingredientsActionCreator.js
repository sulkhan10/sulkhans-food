import { INGREDIENTS_FETCH_SUCCESS } from "./actionTypes";

export let ingredientsFetchSuccess = (payload) => {
  return {
    type: INGREDIENTS_FETCH_SUCCESS,
    payload,
  };
};
