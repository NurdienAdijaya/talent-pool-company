import { combineReducers } from "redux";
import list from "./list";
import post from "./post";
import deleteList from "./delete";
import config from "./config";

export default combineReducers({
  list,
  post,
  deleteList,
  config,
});
