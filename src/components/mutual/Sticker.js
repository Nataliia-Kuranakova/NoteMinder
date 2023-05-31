import useChange from '../../hooks/useChange';
import { useRemoveStickerMutation, useEditStickerMutation } from '../../store';

import { Box, Chip, Tooltip, IconButton, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { motion } from 'framer-motion';
import { cardHover } from '../../animation/stickerAnimation';

import Modal from './Modal';

const Sticker = ({ id, title, body, category, bgColor }) => {
  const {
    scroll,
    openModal,
    stickerText,
    stickerTitle,
    stickerColor,
    stickerCategory,
    handleOpenModal,
    handleCloseModal,
    handleModifyColor,
    handleModifyCategory,
    handleChangeStickerText,
    handleChangeStickerTitle,
    handleCleanModifications,
  } = useChange(title, body, bgColor, category);

  const [removeSticker] = useRemoveStickerMutation();
  const [editSticker] = useEditStickerMutation();

  const editedSticker = {
    id,
    title: stickerTitle,
    body: stickerText,
    category: stickerCategory,
    bgColor: stickerColor,
  };

  const handleRemoveSticker = () => {
    removeSticker(id);
  };

  const handlEditSticker = (e) => {
    e.preventDefault();
    editSticker(editedSticker);
    handleCloseModal();
  };

  const shownTitle = title.length >= 20 ? `${title.slice(0, 20)}...` : title;
  const shownMainContent =
    body.length >= 250 ? `${body.slice(0, 250)}...` : body;

  const showingCategory = category ? (
    <Chip label={category} className="card-category" />
  ) : null;

  return (
    <>
      <Box
        className="card"
        component={motion.div}
        whileHover={cardHover}
        sx={{
          minWidth: '25ch',
          backgroundColor: bgColor,
        }}
      >
        <Box p={2} pt={3} pb={6} className="card">
          {showingCategory}
          <Typography variant="h6" mb={1} className="card-content">
            {shownTitle}
          </Typography>
          <Typography
            variant="body2"
            className="card-content card-content_text"
          >
            {shownMainContent}
          </Typography>
          <Box className="card__inner-box">
            <Box className="card-icon-btns card-icon-btns--delete">
              <Tooltip title="Delete" placement="left">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={handleRemoveSticker}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box className="card-icon-btns card-icon-btns--edit">
              <Tooltip title="Edit" placement="right">
                <IconButton
                  onClick={() => {
                    handleOpenModal('paper');
                  }}
                  sx={{ padding: '11px' }}
                >
                  <ModeEditIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        scroll={scroll}
        openModal={openModal}
        stickerText={stickerText}
        stickerColor={stickerColor}
        stickerTitle={stickerTitle}
        stickerCategory={stickerCategory}
        onSubmit={handlEditSticker}
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

export default Sticker;
