import { all } from "@redux-saga/core/effects";
import { watchGetList } from "./list";

export default function* rootSaga() {
  yield all([
    // watchGetGames(),
    // watchGetGamesDetail(),
    watchGetList(),
  ]);
}
