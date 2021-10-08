import * as types from "../../constants/types";

const initialstate = {
  configList: {
    configs: [],
    listLoading: false,
    listError: null,
    listMessage: [],
  },
};

const config = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_TRACKER_STATUS_BEGIN:
      return {
        ...state,
        configList: {
          listLoading: true,
        },
      };
    case types.GET_TRACKER_STATUS_SUCCESS:
      return {
        ...state,
        configList: {
          configs: payload,
          listLoading: false,
        },
      };
    case types.GET_TRACKER_STATUS_FAIL:
      return {
        ...state,
        configList: {
          listError: true,
          listLoading: false,
          listMessage: payload,
          error: error,
        },
      };
  }
};
export default config;
