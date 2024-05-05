import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import Card from './components/Card';
import { fetchJobs, loadMoreJobs } from "./redux/action";
// import data from "../data.json"
import Filter from './components/Filter';
// console.log("data: ", data);

function App() {
  const { jobs, loading, offset, hasMore } = useSelector(state => state);

  const dispatch = useDispatch();
  const observer = useRef();

  // const jobRole = data.jdList.map(e => e.maxJdSalary)
  // const uniqueJobRoles = [...new Set(jobRole)];

  // console.log(uniqueJobRoles);

  const lastJobCardRef = useCallback(node => {

    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      // console.log("entries: ", entries);
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
      <Filter/>
        <Grid container spacing={3} key={"random value"}>
          {loading && jobs.length == 0 ? <Stack width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={"50px"}>
            <img src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" alt="Not Found Image" width="100px" />
            <Typography>No Jobs available for this category at the moment</Typography>
          </Stack> : jobs.map((job, index) => {
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
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
