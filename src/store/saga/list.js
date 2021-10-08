import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getList(actions) {
  const { error, section, page } = actions;
  const pages = `page=${page}`;
  try {
    const res = yield axios.get(`${BASE_URL}/${section}?${pages}&limit=16`);
    yield put({
      type: types.GET_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_LIST_FAIL,
      error: error,
    });
  }
}

export function* watchGetList() {
  yield takeEvery(types.GET_LIST_BEGIN, getList);
}
