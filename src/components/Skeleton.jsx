
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonComp() {
    const arr = [1, 1, 1, 1, 1, 1]
    return (
        <Grid container spacing={3} key={125+Math.random()} width={"95%"} margin={"auto"} marginTop={"10px"} gap={10}>
            {arr.map(e => {
                return <Stack spacing={1} key={Math.random()} margin={"10px"}>
                    <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={"290px"} height={60} />
                    <Skeleton variant="rounded" width={"290px"} height={60} />
                </Stack>
            })}
        </Grid>
    );
}

export default SkeletonComp
