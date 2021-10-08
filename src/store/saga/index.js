import { all } from "@redux-saga/core/effects";
import { watchGetStatus } from "./config";
import { watchdeleteList } from "./delete";
import { watchEdit, watchEditStatus } from "./edit";
import { watchGetList } from "./list";
import { watchpostList } from "./post";

export default function* rootSaga() {
  yield all([
    watchGetList(),
    watchpostList(),
    watchdeleteList(),
    watchEdit(),
    watchGetStatus(),
    watchEditStatus(),
  ]);
}
