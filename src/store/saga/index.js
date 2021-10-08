import { all } from "@redux-saga/core/effects";
import { watchGetCompany } from "./company";
import { watchGetStatus } from "./config";
import { watchdeleteList } from "./delete";
import { watchEdit, watchEditStatus } from "./edit";
import { watchGetList } from "./list";
import { watchGetPic } from "./pic";
import { watchpostList } from "./post";
import { watchGetTalent } from "./talent";

export default function* rootSaga() {
  yield all([
    watchGetList(),
    watchpostList(),
    watchdeleteList(),
    watchEdit(),
    watchGetStatus(),
    watchEditStatus(),
    watchGetCompany(),
    watchGetPic(),
    watchGetTalent(),
  ]);
}
