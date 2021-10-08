import { combineReducers } from "redux";
import list from "./list";
import post from "./post";
import deleteList from "./delete";
import config from "./config";
import company from "./company";
import pic from "./pic";
import talent from "./talent";

export default combineReducers({
  list,
  post,
  deleteList,
  config,
  company,
  pic,
  talent,
});
