import * as types from "../../constants/types";

const initialstate = {
  picList: {
    pics: [],
    picLoading: false,
    picError: null,
    picMessage: [],
  },
};

const pic = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_PIC_BEGIN:
      return {
        ...state,
        picList: {
          picLoading: true,
        },
      };
    case types.GET_PIC_SUCCESS:
      return {
        ...state,
        picList: {
          pics: payload,
          picLoading: false,
        },
      };
    case types.GET_PIC_FAIL:
      return {
        ...state,
        picList: {
          picError: true,
          picLoading: false,
          picMessage: payload,
          error: error,
        },
      };
  }
};
export default pic;
