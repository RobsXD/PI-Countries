import { GET_COUNTRY, GET_ACTIVITIES } from "./Actions";

let initialState = {
  getCountries: [],
  getActivities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        getCountries: action.payload,
        countriesCopy: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        getActivities: action.payload,
        activitiesCopy: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;