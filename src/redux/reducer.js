import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    APPLY_FILTERS,
    LOAD_MORE_JOBS_REQUEST,
    LOAD_MORE_JOBS_SUCCESS,
    LOAD_MORE_JOBS_FAILURE,
} from './actionType';

// import data from "../resources/data.json"

const data = {
    "jdList": [
        {
            "jdUid": "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
            "jdLink": "https://weekday.works",
            "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            "maxJdSalary": 103,
            "minJdSalary": 100,
            "salaryCurrencyCode": "USD",
            "location": "mumbai",
            "minExp": 1,
            "maxExp": 5,
            "jobRole": "ios",
            "companyName": "LG",
            "logoUrl": "https://logo.clearbit.com/lg.com"
        },
        {
            "jdUid": "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
            "jdLink": "https://weekday.works",
            "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            "maxJdSalary": 28,
            "minJdSalary": 26,
            "salaryCurrencyCode": "USD",
            "location": "remote",
            "minExp": 2,
            "maxExp": 11,
            "jobRole": "android",
            "companyName": "Sony",
            "logoUrl": "https://logo.clearbit.com/sony.com"
        },
        {
            "jdUid": "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
            "jdLink": "https://weekday.works",
            "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            "maxJdSalary": 45,
            "minJdSalary": 35,
            "salaryCurrencyCode": "USD",
            "location": "chennai",
            "minExp": 5,
            "maxExp": 6,
            "jobRole": "tech lead",
            "companyName": "Adobe Systems",
            "logoUrl": "https://logo.clearbit.com/adobe.com"
        },
        {
            "jdUid": "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
            "jdLink": "https://weekday.works",
            "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            "maxJdSalary": 48,
            "minJdSalary": 26,
            "salaryCurrencyCode": "USD",
            "location": "delhi ncr",
            "minExp": 1,
            "maxExp": 8,
            "jobRole": "frontend",
            "companyName": "HP",
            "logoUrl": "https://logo.clearbit.com/hp.com"
        },
        {
            "jdUid": "cfff35fb-053c-11ef-83d3-06301d0a7178-92022",
            "jdLink": "https://weekday.works",
            "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            "maxJdSalary": 19,
            "minJdSalary": 15,
            "salaryCurrencyCode": "USD",
            "location": "chennai",
            "minExp": 8,
            "maxExp": 9,
            "jobRole": "ios",
            "companyName": "eBay",
            "logoUrl": "https://logo.clearbit.com/ebay.com"
        }
    ]
}


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
            console.log("minBasePay: ", minBasePay);
            console.log("roles: ", roles);
            console.log("remoteOnsite: ", remoteOnsite);
            console.log("locations: ", locations);
            console.log("companyNames: ", companyNames);
            console.log("minExperience: ", minExperience);
            // If no Filter is applied 
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
            console.log("filteredJobs: ", filteredJobs);
            return { ...state, filters: action.payload, filteredJobs, filterApplied: true };
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
