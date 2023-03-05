import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import ingredientsReducer from "./ingredientsReducer";
import itemsReducer from "./itemsReducer";
import usersReducer from "./usersReducer";
const rootReducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
  categories: categoriesReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
