import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ppPic from "../resources/image.png"

const res = {
    "jdUid": "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
    "jdLink": "https://weekday.works",
    "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    "maxJdSalary": 103,
    "minJdSalary": 100,
    "salaryCurrencyCode": "USD",
    "location": "mumbai",
    "minExp": null,
    "maxExp": null,
    "jobRole": "ios",
    "companyName": "LG",
    "logoUrl": "https://logo.clearbit.com/lg.com"
}

const Card = () => {
    return (
        <Stack border={"1px solid"} width={"min-content"}>
            <Box borderRadius={"2"} bgcolor={"royalblue"} width={"200px"}>⏳Posted 10 days ago</Box>
            <Stack direction={"row"}>
                <img src={res.logoUrl} alt={res.companyName + " logo"} width="40px" height={"40px"} />
                <Stack>
                    <Typography>{res.companyName}</Typography>
                    <Typography>{res.jobRole}</Typography>
                    <Typography>{res.location}</Typography>
                </Stack>
            </Stack>
            <Typography>Estimated Salary : ₹{res.minJdSalary} - {res.maxJdSalary} LPA ✅</Typography>
            <Typography>ABOUT COMPANY:</Typography>
            <Typography>About us</Typography>
            <Typography>{res.jobDetailsFromCompany}</Typography>
            <Typography>Minimum Experience</Typography>
            <Typography>{res.minExp}</Typography>
            <Button>⚡Easy Apply</Button>
            <Button><img src={ppPic} alt="" width={"20px"} /> <img src={ppPic} alt="" width={"20px"} /> Unlock Referral asks </Button>
        </Stack>
    )
}

export default Card