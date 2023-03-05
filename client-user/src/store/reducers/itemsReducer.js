import {
  ITEMS_FETCH_SUCCESS,
  ITEMS_DETAIL_FETCH_SUCCESS,
} from "../actions/actionTypes";

let initialState = {
  items: [],
};
function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;
