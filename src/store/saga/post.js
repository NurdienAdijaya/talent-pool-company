import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* postList(actions) {
  const { section, form } = actions;
  try {
    const res = yield axios.post(`${BASE_URL}/${section}`, form);
    yield put({
      type: types.POST_LIST_SUCCESS,
      payload: res.data,
    });
    yield alert("Sent successfully ");
    yield window.location.reload();
  } catch (error) {
    yield put({
      type: types.POST_LIST_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

export function* watchpostList() {
  yield takeEvery(types.POST_LIST_BEGIN, postList);
}
