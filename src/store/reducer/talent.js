import * as types from "../../constants/types";

const initialstate = {
  talentList: {
    talents: [],
    talentLoading: false,
    talentError: null,
    talentMessage: [],
  },
};

const talent = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_TALENT_BEGIN:
      return {
        ...state,
        talentList: {
          talentLoading: true,
        },
      };
    case types.GET_TALENT_SUCCESS:
      return {
        ...state,
        talentList: {
          talents: payload,
          talentLoading: false,
        },
      };
    case types.GET_TALENT_FAIL:
      return {
        ...state,
        talentList: {
          talentError: true,
          talentLoading: false,
          talentMessage: payload,
          error: error,
        },
      };
  }
};
export default talent;
