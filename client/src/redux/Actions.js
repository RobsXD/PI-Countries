import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";


export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/countries");
      return dispatch({
        type: "GET_COUNTRY",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}