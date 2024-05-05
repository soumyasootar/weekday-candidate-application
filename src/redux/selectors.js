export const selectJobs = (state) => {
    return state.filteredJobs 
  };
  
  export const selectLoading = (state) => state.loading;
  
  export const selectOffset = (state) => state.offset;
  
  export const selectHasMore = (state) => state.hasMore;
  
  export const selectFilterApplied = (state) => state.filterApplied;