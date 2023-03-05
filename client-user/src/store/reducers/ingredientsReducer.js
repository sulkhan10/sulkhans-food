import { INGREDIENTS_FETCH_SUCCESS } from "../actions/actionTypes";

let initialState = {
  ingredients: [],
};
function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case INGREDIENTS_FETCH_SUCCESS:
      return { ...state, ingredients: action.payload };
    default:
      return state;
  }
}

export default ingredientsReducer;
