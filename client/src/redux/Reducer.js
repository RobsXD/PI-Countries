import { GET_COUNTRY } from "./Actions";

let initialState = {
  getCountries: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        getCountries: action.payload,
        vgsCopy: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
