import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getPic(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/pics?limit=100`);
    yield put({
      type: types.GET_PIC_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_PIC_FAIL,
      error: error,
    });
  }
}

export function* watchGetPic() {
  yield takeEvery(types.GET_PIC_BEGIN, getPic);
}
