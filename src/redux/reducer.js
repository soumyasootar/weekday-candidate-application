import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    APPLY_FILTERS,
    LOAD_MORE_JOBS_REQUEST,
    LOAD_MORE_JOBS_SUCCESS,
    LOAD_MORE_JOBS_FAILURE,
} from './actionType';



const initialState = {
    jobs: [],
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
            return { ...state, filters: action.payload };
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
