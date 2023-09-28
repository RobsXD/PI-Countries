import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES"

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

export function getByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/countries?name=${name}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/activities`)
      return dispatch ({
        type: "GET_ACTIVITIES",
        payload:response.data
      })
    } catch (error) {
      alert(error.message);
    }
  }
}