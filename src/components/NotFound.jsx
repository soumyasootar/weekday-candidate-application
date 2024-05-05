import { Stack, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
    return (
        <Stack width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"50px 0px"}>
            <img src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" alt="Not Found Image" width="100px" />
            <Typography>No Jobs available for this category at the moment</Typography>
        </Stack>
    )
}

export default NotFound
