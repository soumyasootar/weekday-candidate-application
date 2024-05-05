import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import Card from './components/Card';
import { fetchJobs, loadMoreJobs } from "./redux/action";
// import data from "../data.json"
import Filter from './components/Filter';
import Skeleton from './components/Skeleton';
import NotFound from './components/NotFound';
// console.log("data: ", data);

function App() {
  const { jobs, loading, offset, hasMore, filteredJobs } = useSelector(state => state);
  console.log("filteredJobs: ", filteredJobs);


  // Infinite Scroll 
  const dispatch = useDispatch();
  const observer = useRef();
  const lastJobCardRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        dispatch(loadMoreJobs(offset));
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Filter />
        {/* <Skeleton/> */}
        <Grid container spacing={3} key={"random value"}>
          {jobs.length == 0 ?
            <Skeleton />
            :
            filteredJobs.length == 0 ?
              (jobs.map((job, index) => {
                if (jobs.length === index + 1) {
                  return (
                    <Grid item key={job.id} xs={12} sm={6} md={4} ref={lastJobCardRef}>
                      <Card job={job} />
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item key={job.id} xs={12} sm={6} md={4}>
                      <Card job={job} />
                    </Grid>
                  );
                }
              }))
              :
              (filteredJobs.map((job, index) => {
                return <Grid item key={job.id} xs={12} sm={6} md={4} ref={lastJobCardRef}>
                  <Card job={job} />
                </Grid>
              }))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
