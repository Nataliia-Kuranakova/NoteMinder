import useChange from '../../hooks/useChange';
import { useAddStickerMutation } from '../../store';

import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Modal from '../mutual/Modal';

const CreateNew = () => {
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

  const customStyleBtn = {
    position: 'fixed',
    bottom: 25,
    right: 15,
    backgroundColor: 'rgb(4,81,116)',
    ':hover': {
      backgroundColor: '#80b2c6',
    },
  };

  return (
    <Box sx={{ pb: 5 }} className="hiden_mobile-version">
      <Fab
        color="secondary"
        aria-label="add"
        sx={customStyleBtn}
        onClick={() => {
          handleOpenModal('paper');
        }}
      >
        <AddIcon />
      </Fab>
      <Modal
        scroll={scroll}
        openModal={openModal}
        stickerText={stickerText}
        stickerTitle={stickerTitle}
        stickerColor={stickerColor}
        stickerCategory={stickerCategory}
        onSubmit={handleAddSticker}
        onCloseModal={handleCloseModal}
        onModifyColor={handleModifyColor}
        onModifyCategory={handleModifyCategory}
        onChangeStickerText={handleChangeStickerText}
        onChangeStickerTitle={handleChangeStickerTitle}
        onCleanModifications={handleCleanModifications}
      />
    </Box>
  );
};

export default CreateNew;
