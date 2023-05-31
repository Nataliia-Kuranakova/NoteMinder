import { useRef, useEffect } from 'react';

import {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import ColorsList from './ColorsList';
import ModalContent from './ModalContent';
import CategoriesList from './CategoriesList';
import StickerTextField from './StickerTextField';
import StickerModificatorMenu from '../web/StickerModificatorMenu';
import StickerModificatorDrawer from '../mobile/StickerModificatorDrawer';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import ColorLensIcon from '@mui/icons-material/ColorLens';

import { Chip, Tooltip, IconButton, Box } from '@mui/material';

const Modal = ({
  scroll,
  onSubmit,
  openModal,
  stickerText,
  stickerTitle,
  onCloseModal,
  stickerColor,
  onModifyColor,
  stickerCategory,
  onModifyCategory,
  onChangeStickerText,
  onChangeStickerTitle,
  onCleanModifications,
}) => {
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (openModal) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openModal]);

  const handleCloseModal = () => {
    onCloseModal();
    onCleanModifications();
  };

  const modalCategory = stickerCategory ? (
    <Chip size="small" label={stickerCategory} className="modal-category" />
  ) : null;

  const colorsList = (
    <ColorsList onModifyColor={onModifyColor} openModal={openModal} />
  );
  const categoriesList = (
    <CategoriesList onModifyCategory={onModifyCategory} openModal={openModal} />
  );

  return (
    <div>
      <ModalContent
        onSubmit={onSubmit}
        openModal={openModal}
        closeModal={handleCloseModal}
        scroll={scroll}
      >
        <Box className="modal-active-btns modal-active-btns--close">
          <Tooltip title="Close" placement="top">
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <DialogTitle
          id="scroll-dialog-title"
          sx={{ backgroundColor: stickerColor }}
        >
          <StickerTextField
            text={stickerTitle}
            onChange={onChangeStickerTitle}
            inputProps={{ style: { fontSize: 21 } }}
            placeholder="Title"
          />
        </DialogTitle>
        <DialogContent
          dividers={scroll === 'paper'}
          sx={{ backgroundColor: stickerColor, border: 'none' }}
        >
          <DialogContentText
            component="div"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <StickerTextField
              text={stickerText}
              onChange={onChangeStickerText}
              placeholder="Note"
            />
          </DialogContentText>
        </DialogContent>
        {modalCategory}
        <DialogActions sx={{ backgroundColor: stickerColor, height: 50 }}>
          <Box className="modal-active-btns modal-active-btns--save">
            <Tooltip title="Save" placement="bottom">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box className="modal-active-btns modal-active-btns--select-color hiden_web-version">
            <StickerModificatorMenu
              buttons={colorsList}
              label="Add color"
              openModal={openModal}
            >
              <ColorLensIcon />
            </StickerModificatorMenu>
          </Box>

          <Box className="modal-active-btns modal-active-btns--select-category hiden_web-version">
            <StickerModificatorMenu
              buttons={categoriesList}
              label="Add category"
              openModal={openModal}
            >
              <CategoryIcon />
            </StickerModificatorMenu>
          </Box>

          <Box className="modal-active-btns modal-active-btns--select-color hiden_mobile-version">
            <StickerModificatorDrawer buttons={colorsList} label="Add color">
              <ColorLensIcon />
            </StickerModificatorDrawer>
          </Box>
          <Box className="modal-active-btns modal-active-btns--select-category hiden_mobile-version">
            <StickerModificatorDrawer
              buttons={categoriesList}
              label="Add category"
            >
              <CategoryIcon />
            </StickerModificatorDrawer>
          </Box>
        </DialogActions>
      </ModalContent>
    </div>
  );
};

export default Modal;
