import * as types from "../../constants/types";

const initialstate = {
  companyList: {
    companies: [],
    companyLoading: false,
    companyError: null,
    companyMessage: [],
  },
};

const company = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_COMPANY_BEGIN:
      return {
        ...state,
        companyList: {
          companyLoading: true,
        },
      };
    case types.GET_COMPANY_SUCCESS:
      return {
        ...state,
        companyList: {
          companies: payload,
          companyLoading: false,
        },
      };
    case types.GET_COMPANY_FAIL:
      return {
        ...state,
        companyList: {
          companyError: true,
          companyLoading: false,
          companyMessage: payload,
          error: error,
        },
      };
  }
};
export default company;
