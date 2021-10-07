import { combineReducers } from "redux";
import list from "./list";
import post from "./post";
import deleteList from "./delete";

export default combineReducers({
  list,
  post,
  deleteList,
});
