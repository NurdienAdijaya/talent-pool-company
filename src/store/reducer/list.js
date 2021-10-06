import * as types from "../../constants/types";

const initialstate = {
  entityList: {
    lists: [],
    listLoading: false,
    listError: null,
    listMessage: [],
  },
};

const list = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_LIST_BEGIN:
      return {
        ...state,
        entityList: {
          listLoading: true,
        },
      };
    case types.GET_LIST_SUCCESS:
      return {
        ...state,
        entityList: {
          lists: payload,
          listLoading: false,
        },
      };
    case types.GET_LIST_FAIL:
      return {
        ...state,
        entityList: {
          listError: true,
          listLoading: false,
          listMessage: payload,
          error: error,
        },
      };
  }
};
export default list;
