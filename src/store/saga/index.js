import { all } from "@redux-saga/core/effects";
import { watchdeleteList } from "./delete";
import { watchGetList } from "./list";
import { watchpostList } from "./post";

export default function* rootSaga() {
  yield all([watchGetList(), watchpostList(), watchdeleteList()]);
}
