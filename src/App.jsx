import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import Card from './components/Card';
import { fetchJobs, loadMoreJobs } from "./redux/action";
import Filter from './components/Filter';
import Skeleton from './components/Skeleton';
import NotFound from './components/NotFound';


function App() {
  // Taking Data From Redux 
  const { jobs, loading, offset, hasMore, filteredJobs, filterApplied } = useSelector(state => state);

  const dispatch = useDispatch();

  // Infinite Scroll 
  const observer = useRef();
  const lastJobCardRef = useCallback(node => {
    // console.log("node: ", node);
    if (loading) return;

    if (observer.current && !filterApplied) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!filterApplied) {
          dispatch(loadMoreJobs(offset));
        }
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // To Load With App Mounts 
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        {/* Filter Component  */}
        <Filter />

        {/* Search Results  */}
        {filterApplied && filteredJobs.length == 0 ? <NotFound /> : <></>}
        {filterApplied ? <Box> <Typography variant='h4' marginBottom={5}>Total Jobs : {filteredJobs.length} </Typography> </Box> : <></>}

        {/* Grid to View Card -- will be transferred to one more component */}
        <Grid container spacing={3} key={"random"} gridAutoRows={"400px"}>
          {/* Conditional Rendering to Show Various Jobs and Filtered Jobs  */}
          {jobs.length == 0 ?
            <Skeleton />  // If No Jobs Show Skeleton
            :
            filteredJobs.length == 0 ?
              (jobs.map((job, index) => {
                if (jobs.length === index + 1) {
                  return (
                    <Grid item key={8445 + Math.random()} xs={12} sm={6} md={4} ref={lastJobCardRef}>
                      <Card job={job} />
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item key={844 + Math.random()} xs={12} sm={6} md={4} ref={lastJobCardRef}>
                      <Card job={job} />
                    </Grid>
                  );
                }
              }))
              //Filtered Jobs 
              : (filteredJobs.map((job, index) => {
                return <Grid item key={546 + Math.random()} xs={12} sm={6} md={4}>
                  <Card job={job} />
                </Grid>
              }))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
