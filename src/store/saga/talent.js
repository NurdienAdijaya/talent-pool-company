import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getTalent(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/talents?limit=100`);
    yield put({
      type: types.GET_TALENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_TALENT_FAIL,
      error: error,
    });
  }
}

export function* watchGetTalent() {
  yield takeEvery(types.GET_TALENT_BEGIN, getTalent);
}
