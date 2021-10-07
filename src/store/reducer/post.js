import * as types from "../../constants/types";

const initialstate = {
  postList: {
    lists: [],
    listLoading: false,
    listError: null,
    listMessage: [],
  },
};

const post = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.POST_LIST_BEGIN:
      return {
        ...state,
        postList: {
          listLoading: true,
        },
      };
    case types.POST_LIST_SUCCESS:
      return {
        ...state,
        postList: {
          lists: payload,
          listLoading: false,
        },
      };
    case types.POST_LIST_FAIL:
      return {
        ...state,
        postList: {
          listError: true,
          listLoading: false,
          listMessage: payload,
          error: error,
        },
      };
  }
};
export default post;
