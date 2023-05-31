import useChange from '../../hooks/useChange';

import { useAddStickerMutation } from '../../store';

import Modal from '../mutual/Modal';

import {
  Tooltip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateNewSticker = ({ openDrawer }) => {
  const {
    scroll,
    openModal,
    newSticker,
    stickerText,
    stickerTitle,
    stickerColor,
    stickerCategory,
    handleOpenModal,
    handleCloseModal,
    handleModifyColor,
    handleModifyCategory,
    handleChangeStickerText,
    handleCleanModifications,
    handleChangeStickerTitle,
  } = useChange();

  const [addSticker] = useAddStickerMutation();

  const handleAddSticker = (e) => {
    e.preventDefault();
    addSticker(newSticker);
    handleCloseModal();
    handleCleanModifications();
  };

  const create = (
    <List
      component="div"
      disablePadding
      onClick={() => {
        handleOpenModal('paper');
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AddCircleIcon sx={{ color: 'rgba(4,81,116,0.8)', fontSize: 31 }} />
        </ListItemIcon>
        <ListItemText primary="Create new note" />
      </ListItemButton>
    </List>
  );

  return (
    <>
      {!openDrawer ? (
        <Tooltip title="Create new note" placement="right">
          {create}
        </Tooltip>
      ) : (
        create
      )}
      <Modal
        scroll={scroll}
        openModal={openModal}
        stickerText={stickerText}
        stickerColor={stickerColor}
        stickerTitle={stickerTitle}
        stickerCategory={stickerCategory}
        onSubmit={handleAddSticker}
        onCloseModal={handleCloseModal}
        onModifyColor={handleModifyColor}
        onModifyCategory={handleModifyCategory}
        onChangeStickerText={handleChangeStickerText}
        onChangeStickerTitle={handleChangeStickerTitle}
        onCleanModifications={handleCleanModifications}
      />
    </>
  );
};

export default CreateNewSticker;
