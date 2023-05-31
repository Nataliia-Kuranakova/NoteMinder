import { useState } from 'react';

const useChange = (title, body, bgColor, category) => {
  const [scroll, setScroll] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [stickerText, setStickerText] = useState(body);
  const [stickerTitle, setStickerTitle] = useState(title);
  const [stickerColor, setStickerColor] = useState(bgColor);
  const [stickerCategory, setStickerCategory] = useState(category);

  const handleChangeStickerText = (e) => setStickerText(e.target.value);
  const handleChangeStickerTitle = (e) => setStickerTitle(e.target.value);

  const newSticker = {
    title: stickerTitle,
    body: stickerText,
    category: stickerCategory || null,
    bgColor: stickerColor || '#f4f4f4',
  };

  const handleOpenModal = (scrollType) => {
    setOpenModal(true);
    setScroll(scrollType);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleModifyCategory = (categoryName) => {
    setStickerCategory(categoryName.value);
  };

  const handleModifyColor = (color) => {
    setStickerColor(color.value);
  };

  const handleCleanModifications = () => {
    setTimeout(() => {
      setStickerText(body);
      setStickerTitle(title);
      setStickerColor(bgColor);
      setStickerCategory(category);
    }, 1000);
  };

  return {
    newSticker,
    scroll,
    openModal,
    stickerText,
    stickerTitle,
    stickerColor,
    stickerCategory,
    handleOpenModal,
    handleCloseModal,
    handleChangeStickerText,
    handleChangeStickerTitle,
    handleModifyCategory,
    handleModifyColor,
    handleCleanModifications,
  };
};

export default useChange;
