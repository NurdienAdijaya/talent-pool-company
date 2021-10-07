import * as types from "../../constants/types";

export const deleteList = (section, id) => {
  return {
    type: types.DELETE_LIST_BEGIN,
    section,
    id,
  };
};
