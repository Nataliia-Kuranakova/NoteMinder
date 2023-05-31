import {
  List,
  Tooltip,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

const ListBtns = ({
  children,
  description,
  openDrawer,
  openModal,
  ...rest
}) => {
  const renderListBtns = (
    <List {...rest} component="div" disablePadding>
      <ListItemButton>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={description} />
      </ListItemButton>
    </List>
  );

  return (
    <>
      {!openModal && !openDrawer ? (
        <Tooltip title={description} placement="right">
          {renderListBtns}
        </Tooltip>
      ) : (
        renderListBtns
      )}
    </>
  );
};

export default ListBtns;
