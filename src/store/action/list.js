import * as types from "../../constants/types";

export const getList = (section) => {
  return {
    type: types.GET_LIST_BEGIN,
    section,
  };
};
