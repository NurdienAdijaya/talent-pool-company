import * as types from "../../constants/types";

export const edit = (section, id, form) => {
  return {
    type: types.EDIT_LIST_BEGIN,
    section,
    id,
    form,
  };
};
export const editStatus = (id, form) => {
  return {
    type: types.EDIT_STATUS_BEGIN,
    id,
    form,
  };
};
