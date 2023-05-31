import { useSelector } from 'react-redux';

import { Box, Typography, Zoom } from '@mui/material';

const SelectedFilter = ({ children }) => {
  const { isSelectedFilter, activeFilter, selectedFilterDscr } = useSelector(
    (state) => state.filters
  );

  const shownChildren =
    selectedFilterDscr.toLowerCase() !== activeFilter && activeFilter !== null
      ? children
      : null;
  return (
    <Box sx={{ margin: '0 auto' }}>
      {isSelectedFilter && (
        <Zoom in={isSelectedFilter}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              variant="body"
              component="div"
              className="subtitles_size subtitles"
            >
              {selectedFilterDscr}
            </Typography>
            {shownChildren}
          </Box>
        </Zoom>
      )}
    </Box>
  );
};

export default SelectedFilter;

// sx={{ fontSize: 24 }}
