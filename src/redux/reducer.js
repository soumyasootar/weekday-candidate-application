import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    APPLY_FILTERS,
    LOAD_MORE_JOBS_REQUEST,
    LOAD_MORE_JOBS_SUCCESS,
    LOAD_MORE_JOBS_FAILURE,
} from './actionType';

import data from "../resources/data.json"


const initialState = {
    jobs: [],
    filteredJobs: [],
    allJobs: [...data.jdList],
    loading: false,
    error: null,
    filters: {},
    offset: 0,
    hasMore: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return { ...state, loading: true, error: null };
        case LOAD_MORE_JOBS_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_JOBS_SUCCESS:
            return { ...state, loading: false, jobs: action.payload };
        case LOAD_MORE_JOBS_FAILURE:
            return { ...state, loading: false, error: action.error };
        case APPLY_FILTERS:
            const { minExperience, companyNames, locations, remoteOnsite, roles, minBasePay } = action.payload;
            // If no Filter is applied 
            if (minExperience == null && companyNames == null && locations == null && remoteOnsite == null && roles == null && minBasePay == null)
                return { ...state, filters: action.payload, filteredJobs: [] };
            //filter the jobs 
            const filteredJobs = state.allJobs.filter(job => {
                return (!minExperience || job.minExp >= minExperience) &&
                    (!companyNames || companyNames.includes(job.companyName)) &&
                    (!locations || locations.includes(job.location)) &&
                    (remoteOnsite == null || remoteOnsite.length != 1 || (remoteOnsite[0] == "remote" ? job.location == "remote" : job.location != "remote")) &&
                    (!roles || roles.includes(job.jobRole)) &&
                    (!minBasePay || job.minJdSalary >= minBasePay || job.maxJdSalary >= minBasePay);
            });
            // console.log("filteredJobs: ", filteredJobs);
            return { ...state, filters: action.payload, filteredJobs };
        case LOAD_MORE_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, ...action.payload],
                offset: state.offset + 1,
                hasMore: action.payload.length > 0, // Check if there are more jobs to load
            };

        default:
            return state;
    }
};

export default reducer;
