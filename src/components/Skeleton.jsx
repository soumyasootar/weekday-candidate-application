
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonComp() {
  return (
    <Stack spacing={1} width={"500px"}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={"100px"} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}

export default SkeletonComp
