import * as types from "../../constants/types";

const initialstate = {
  deleteList: {
    lists: [],
    listLoading: false,
    listError: null,
    listMessage: [],
  },
};

const deleteList = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.DELETE_LIST_BEGIN:
      return {
        ...state,
        deleteList: {
          listLoading: true,
        },
      };
    case types.DELETE_LIST_SUCCESS:
      return {
        ...state,
        deleteList: {
          lists: payload,
          listLoading: false,
        },
      };
    case types.DELETE_LIST_FAIL:
      return {
        ...state,
        deleteList: {
          listError: true,
          listLoading: false,
          listMessage: payload,
          error: error,
        },
      };
  }
};
export default deleteList;
