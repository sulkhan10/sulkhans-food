
import logger from "./middlewares/logger";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
const { legacy_createStore: createStore, applyMiddleware } = require("redux");
let store = createStore(rootReducer, applyMiddleware(logger,thunk));
export default store;
