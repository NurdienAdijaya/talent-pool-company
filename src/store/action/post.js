import * as types from "../../constants/types";

export const postList = (section, form) => {
  return {
    type: types.POST_LIST_BEGIN,
    section,
    form,
  };
};
