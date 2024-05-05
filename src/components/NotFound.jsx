import { Stack, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
    return (
        <Stack width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={"50px"}>
            <img src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" alt="Not Found Image" width="100px" />
            <Typography>No Jobs available for this category at the moment</Typography>
        </Stack>
    )
}

export default NotFound
// {loading || jobs.length == 0 ? 
//     <NotFound/>
//    :
//    filteredJobs.length == 0 ? 
//    (jobs.map((job, index) => {
//     if (jobs.length === index + 1) {
//       return (
//         <Grid item key={job.id} xs={12} sm={6} md={4} ref={lastJobCardRef}>
//           <Card job={job} />
//         </Grid>
//       );
//     } else {
//       return (
//         <Grid item key={job.id} xs={12} sm={6} md={4}>
//           <Card job={job} />
//         </Grid>
//       );
//     }
//   })) 
//   : 
//   (filteredJobs.map((job, index) => {
//     return <Grid item key={job.id} xs={12} sm={6} md={4} ref={lastJobCardRef}>
//       <Card job={job} />
//     </Grid>
//   }))}