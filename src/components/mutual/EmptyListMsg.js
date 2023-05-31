import { Container, Typography } from '@mui/material';

const EmptyListMsg = () => {
  return (
    <Container className="content-empty-list-msg">
      <Typography variant="h4" textAlign="center" className="subtitles ">
        Create a first sticker
      </Typography>
    </Container>
  );
};

export default EmptyListMsg;
