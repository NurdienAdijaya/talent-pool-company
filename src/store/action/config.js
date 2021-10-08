import * as types from "../../constants/types";

export const getStatus = () => {
  return {
    type: types.GET_TRACKER_STATUS_BEGIN,
  };
};
