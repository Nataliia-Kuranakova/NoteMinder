import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedFilter } from '../../store';

import { Chip, Stack, Zoom, Typography, Container, Box } from '@mui/material';

const EmptyFiltrationBtn = () => {
  const { isSelectedFilter } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleRenderSticersList = () => {
    dispatch(deleteSelectedFilter());
  };

  return (
    <>
      <Container>
        <Box className="content-empty-filtration">
          <Stack direction="row" sx={{ justifyContent: 'center' }}>
            <Zoom in={isSelectedFilter}>
              <Chip
                label="go back to all stickers"
                variant="outlined"
                onClick={handleRenderSticersList}
              />
            </Zoom>
          </Stack>
          <Typography
            sx={{ color: 'rgba(4,81,116,0.8)' }}
            variant="h4"
            mt={3}
            textAlign="center"
          >
            Here is nothing for filtration...
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default EmptyFiltrationBtn;
