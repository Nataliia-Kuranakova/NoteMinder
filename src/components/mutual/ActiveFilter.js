import { deleteSelectedFilter } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

import { Chip, Stack, Zoom, Box } from '@mui/material';

const ActiveFilter = ({ differentChip }) => {
  const { isSelectedFilter, activeFilter, selectedFilterDscr } = useSelector(
    (state) => state.filters
  );

  const dispatch = useDispatch();

  const handleDeleteSelector = () => {
    dispatch(deleteSelectedFilter());
  };

  const rendereddifferentChip = () => {
    if (differentChip) {
      return (
        <Chip
          label={selectedFilterDscr}
          sx={{ backgroundColor: activeFilter }}
        />
      );
    } else {
      return (
        <Chip
          label={selectedFilterDscr}
          sx={{ backgroundColor: activeFilter }}
          onDelete={handleDeleteSelector}
        />
      );
    }
  };

  const chip = rendereddifferentChip();

  return (
    <Box className="hiden_web-version">
      <Stack direction="row" className="selected-filter-chip chip" ml={3}>
        <Zoom in={isSelectedFilter}>{chip}</Zoom>
      </Stack>
    </Box>
  );
};

export default ActiveFilter;
