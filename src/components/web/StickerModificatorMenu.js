import { useState } from 'react';

import { Menu, Fade, Tooltip, IconButton } from '@mui/material';

const StickerModificatorMenu = ({ children, buttons, label }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title={label} placement="bottom">
        <IconButton
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {children}
        </IconButton>
      </Tooltip>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        TransitionComponent={Fade}
      >
        {buttons}
      </Menu>
    </div>
  );
};

export default StickerModificatorMenu;
