import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <Stack
      sx={{ color: 'grey.500', height: '70vh' }}
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Spinner;
