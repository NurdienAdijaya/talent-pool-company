import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* deleteList(actions) {
  const { section, id } = actions;
  try {
    const res = yield axios.delete(`${BASE_URL}/${section}/${id}`);
    yield put({
      type: types.DELETE_LIST_SUCCESS,
      payload: res.data,
    });
    yield alert("Delete Success");
    yield window.location.reload();
  } catch (error) {
    yield put({
      type: types.DELETE_LIST_FAIL,
      payload: error.response.data.errors,
    });
    yield alert(error.response.data.errors);
  }
}

export function* watchdeleteList() {
  yield takeEvery(types.DELETE_LIST_BEGIN, deleteList);
}
