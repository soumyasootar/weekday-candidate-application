
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonComp() {
    const arr = [1, 1, 1, 1, 1, 1]
    return (
        <Grid container spacing={4} key={"random value"} width={"100%"}>
            {arr.map(e => {
                return <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
            })}
        </Grid>
    );
}

export default SkeletonComp
