import * as types from "../../constants/types";

const initialstate = {
  editList: {
    lists: [],
    listLoading: false,
    listError: null,
    listMessage: [],
  },
  editStatus: {
    stats: [],
    statLoading: false,
    statError: null,
    statMessage: [],
  },
};

const edit = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.EDIT_LIST_BEGIN:
      return {
        ...state,
        editList: {
          listLoading: true,
        },
      };
    case types.EDIT_LIST_SUCCESS:
      return {
        ...state,
        editList: {
          lists: payload,
          listLoading: false,
        },
      };
    case types.EDIT_LIST_FAIL:
      return {
        ...state,
        editList: {
          listError: true,
          listLoading: false,
          listMessage: payload,
          error: error,
        },
      };

    case types.EDIT_STATUS_BEGIN:
      return {
        ...state,
        editStatus: {
          statLoading: true,
        },
      };
    case types.EDIT_STATUS_SUCCESS:
      return {
        ...state,
        editStatus: {
          stats: payload,
          statLoading: false,
        },
      };
    case types.EDIT_STATUS_FAIL:
      return {
        ...state,
        editStatus: {
          statError: true,
          statLoading: false,
          statMessage: payload,
          error: error,
        },
      };
  }
};
export default edit;
