import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const rootReducers = combineReducers({
	rootReducer: rootReducer
});

export default rootReducers;