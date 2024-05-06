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
    filterApplied: false,
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
            // console.log("minBasePay: ", minBasePay);
            // console.log("roles: ", roles);
            // console.log("remoteOnsite: ", remoteOnsite);
            // console.log("locations: ", locations);
            // console.log("companyNames: ", companyNames);
            // console.log("minExperience: ", minExperience);

            // If no Filter is applied condition
            if ((minExperience == null || minExperience == undefined) &&
                (companyNames == null || companyNames.length == 0) &&
                (locations == null || locations.length == 0) &&
                (remoteOnsite == null || remoteOnsite.length == 0) &&
                (roles == null || roles.length == 0) &&
                (minBasePay == null || minBasePay == undefined)) {
                console.log("hii");
                return { ...state, filters: action.payload, filteredJobs: [], filterApplied: false };
            }

            //filter the jobs 
            const filteredJobs = state.allJobs.filter(job => {
                return (!minExperience || job.minExp >= minExperience) &&
                    (!companyNames || companyNames.length == 0 || companyNames.includes(job.companyName)) &&
                    (!locations || locations.length == 0 || locations.includes(job.location)) &&
                    (remoteOnsite == null || remoteOnsite.length != 1 || (remoteOnsite[0] == "remote" ? job.location == "remote" : job.location != "remote")) &&
                    (!roles || roles.includes(job.jobRole)) &&
                    (!minBasePay || job.minJdSalary >= minBasePay || job.maxJdSalary >= minBasePay);
            });

            // console.log("filteredJobs: ", filteredJobs);
            return { ...state, filters: action.payload, filteredJobs, filterApplied: true };

        //Infinite Scrolling
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
