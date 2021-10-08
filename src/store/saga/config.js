import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getStatus(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/trackers/status`);
    yield put({
      type: types.GET_TRACKER_STATUS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_TRACKER_STATUS_FAIL,
      error: error,
    });
  }
}

export function* watchGetStatus() {
  yield takeEvery(types.GET_TRACKER_STATUS_BEGIN, getStatus);
}
