import { Container, Typography } from '@mui/material';

const ErrorMsg = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        className="content-empty-filtration subtitles"
      >
        Error...
      </Typography>
    </Container>
  );
};

export default ErrorMsg;