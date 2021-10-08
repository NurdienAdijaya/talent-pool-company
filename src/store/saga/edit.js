import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* edit(actions) {
  const { section, id, form } = actions;
  try {
    const res = yield axios.put(`${BASE_URL}/${section}/${id}`, form);
    yield put({
      type: types.EDIT_LIST_SUCCESS,
      payload: res.data,
    });
    yield alert("Edit Success");
    yield window.location.reload();
  } catch (error) {
    yield put({
      type: types.EDIT_LIST_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

function* editStatus(actions) {
  const { id, form } = actions;
  try {
    const res = yield axios.put(`${BASE_URL}/trackers/${id}`, form);
    yield put({
      type: types.EDIT_STATUS_SUCCESS,
      payload: res.data,
    });
    yield alert("Edit Success");
    yield window.location.reload();
  } catch (error) {
    yield put({
      type: types.EDIT_STATUS_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

export function* watchEdit() {
  yield takeEvery(types.EDIT_LIST_BEGIN, edit);
}
export function* watchEditStatus() {
  yield takeEvery(types.EDIT_STATUS_BEGIN, editStatus);
}
