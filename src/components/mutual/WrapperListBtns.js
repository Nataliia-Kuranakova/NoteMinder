import {
  List,
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const WrapperListBtns = ({ open, label, buttons, children, handleClick }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
      component="nav"
      disablePadding
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {buttons}
      </Collapse>
    </List>
  );
};

export default WrapperListBtns;
