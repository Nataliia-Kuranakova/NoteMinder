import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSelectedFilter } from '../../store';

import { Box, Drawer, Divider } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

import TopAppBar from './TopAppBar';
import ListBtns from '../mutual/ListBtns';
import FiltrationListBtns from '../mutual/FiltrationListBtns';

const DrawerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();

  const handleGetEntireStickersList = () => {
    dispatch(deleteSelectedFilter());
  };

  const handleToggleDrawer = () => {
    setOpenDrawer((current) => !current);
  };

  return (
    <div>
      <TopAppBar onOpenDrawer={handleToggleDrawer} />
      <Drawer open={openDrawer} onClose={handleToggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <ListBtns
            onClick={handleGetEntireStickersList}
            description="All notes"
            openDrawer={openDrawer}
          >
            <OtherHousesIcon
              className="list-modifications-btns"
              sx={{ fontSize: 31 }}
            />
          </ListBtns>
          <Divider />
          <FiltrationListBtns
            onCloseMobileDrawer={handleToggleDrawer}
            closedModileDrawer={openDrawer}
            openDrawer={openDrawer}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
