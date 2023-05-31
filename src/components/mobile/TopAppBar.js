import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import {
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  useScrollTrigger,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';

import SelectedFilter from './SelectedFilter';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const TopAppBar = ({ onOpenDrawer, ...props }) => {
  const { activeFilter } = useSelector((state) => state.filters);

  const customStyleAppBar = {
    backgroundColor: 'white',
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="app-bar" sx={customStyleAppBar}>
          <Toolbar>
            <IconButton
              onClick={onOpenDrawer}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <SelectedFilter>
              <CircleIcon sx={{ color: activeFilter, fontSize: '33px' }} />
            </SelectedFilter>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default TopAppBar;
