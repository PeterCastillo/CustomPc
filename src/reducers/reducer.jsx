import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { selectedComponentsReducer } from "./selectedComponentsReducer";

const reducer = combineReducers({
    filter : filterReducer,
    selectedComponents: selectedComponentsReducer
})

export default reducer