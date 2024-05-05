import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import Card from './components/Card';
import { fetchJobs } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector(state => state);
  console.log("loading: ", loading);
  console.log("jobs: ", jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {!loading && jobs.map(job => (
            <Grid item key={job.id} xs={12} sm={6} md={4}>
              <Card job={job}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
