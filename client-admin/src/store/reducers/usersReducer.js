import { USER_FETCH_SUCCESS } from "../actions/actionTypes";
let initialState = {
  users: [],
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
}

export default usersReducer;
