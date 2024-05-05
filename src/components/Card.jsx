import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ppPic from "../resources/image.png"
import TruncatedText from './TruncatedText'

const Card = ({ job }) => {
    // console.log("job: ", job);
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 11) + 1);
    return (
        <Stack spacing={2} border={"1px solid #ececec"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"} borderRadius={"20px"} padding={4} sx={{
            '&:hover': {
                transform: 'scale(1.03)',
                transition: 'transform 0.2s ease-in-out',
            },
        }}>
            <Box borderRadius={"13px"} padding={"5px 10px"} width={"fit-content"} fontSize={"small"} border={"1px solid #e4e4e4"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} >⏳ Posted {randomNum} {randomNum === 1 ? 'day' : 'days'} ago</Box>
            <Stack direction={"row"} spacing={2}>
                <img src={job.logoUrl} alt={job.companyName + " logo"} width="40px" height={"50px"} style={{ objectFit: "contain" }} />
                <Stack spacing={1} >
                    <Typography color={"#a7a7a7"} fontWeight={600} letterSpacing={3}>{job.companyName}</Typography>
                    <Typography fontSize={"large"}>{job.jobRole[0].toUpperCase() + job.jobRole.slice(1) + " Developer"}</Typography>
                    <Typography fontSize={"small"}>{job.location[0].toUpperCase() + job.location.slice(1)}</Typography>
                </Stack>
            </Stack>
            <Typography color={"#313841"} fontWeight={600}>Estimated Salary : ${(job.minJdSalary == null ? 20 : job.minJdSalary) + " - "} {job.maxJdSalary}K ✅</Typography>
            <Typography fontWeight={"bold"} fontSize={"large"}>About Company:</Typography>
            <TruncatedText
                text={job.jobDetailsFromCompany}
                maxLength={300} // Adjust the maximum length as needed
            />
            <Typography color={"#858585"}>Minimum Experience</Typography>
            <Typography sx={{ marginTop: "-1px !important" }}>{job.minExp == null ? (job.maxExp == null ? 10 : job.maxExp) : 3} years</Typography>
            <Button sx={{ bgcolor: "#54efc3", color: "black", fontWeight: "bold", textTransform: "none", borderRadius: "8px", padding: "9px 20px", fontSize: "large" }}>⚡Easy Apply</Button>
            <Button sx={{ bgcolor: "#4943da", color: "white", textTransform: "none", borderRadius: "8px", padding: "12px 20px", fontSize: "" }}>
                <Stack direction={"row"} spacing={1}>

                    <img
                        src={ppPic}
                        alt=""
                        width={"23px"}
                        height={"23px"}
                        style={{ filter: "blur(1px)", marginLeft: "10px" }} // Apply blur filter to the image

                    />
                    <img
                        src={ppPic}
                        alt=""
                        width={"23px"}
                        height={"23px"}
                        style={{ filter: "blur(1px)" }} // Apply blur filter to the image
                    />
                    <Typography>
                        Unlock Referral asks
                    </Typography>
                </Stack>
            </Button>


        </Stack>
    )
}

export default Card