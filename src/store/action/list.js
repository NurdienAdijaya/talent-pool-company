import * as types from "../../constants/types";

export const getList = (section, page = "1") => {
  return {
    type: types.GET_LIST_BEGIN,
    section,
    page,
  };
};
