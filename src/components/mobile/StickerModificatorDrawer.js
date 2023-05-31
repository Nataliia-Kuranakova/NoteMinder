import { useState } from 'react';

import { Box, IconButton, Drawer } from '@mui/material';

const StickerModificatorDrawer = ({ children, buttons, label }) => {
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const listBtns = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {buttons}
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer('bottom', true)}>{children}</IconButton>
      <Drawer
        sx={{ zIndex: 1301 }}
        anchor="bottom"
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {listBtns('bottom')}
      </Drawer>
    </>
  );
};

export default StickerModificatorDrawer;
