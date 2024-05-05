import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    APPLY_FILTERS,
    LOAD_MORE_JOBS_REQUEST,
    LOAD_MORE_JOBS_SUCCESS,
    LOAD_MORE_JOBS_FAILURE,
  } from './actionType';
  

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({ "limit": 10, "offset": 0 });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();

      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data.jdList });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_FAILURE, error: error.message });
    }
  };
};

export const applyFilters = (filters) => {
  return { type: APPLY_FILTERS, payload: filters };
};

export const loadMoreJobs = (offset) => {
  return async (dispatch) => {
    dispatch({ type: LOAD_MORE_JOBS_REQUEST });

    try {
      // Fetch more jobs with new offset
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({ "limit": 10, "offset": offset });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();

      dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data.jdList });
    } catch (error) {
      dispatch({ type: LOAD_MORE_JOBS_FAILURE, error: error.message });
    }
  };
};
