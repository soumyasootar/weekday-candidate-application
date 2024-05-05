import axios from 'axios';
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
      const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", { limit: 10, offset: 0 });
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data.jdList });
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
      const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", { limit: 10, offset });
      dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: response.data.jdList });
    } catch (error) {
      dispatch({ type: LOAD_MORE_JOBS_FAILURE, error: error.message });
    }
  };
};
