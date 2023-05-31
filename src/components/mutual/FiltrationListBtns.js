import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filteredStickersList } from '../../store';

import { Tooltip } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

import ColorsList from './ColorsList';
import CategoriesList from './CategoriesList';
import WrapperListBtns from './WrapperListBtns';

const FiltrationListBtns = ({ openDrawer }) => {
  const [isShownColorbtn, setIsShownColorbtns] = useState(false);
  const [isShownCategoryBtns, setIsShownCategoryBtns] = useState(false);

  const handleToggleColorFilterBtns = () => {
    setIsShownColorbtns((current) => !current);
    setIsShownCategoryBtns(false);
  };

  const handleToggleCategoryFilterBtns = () => {
    setIsShownCategoryBtns((current) => !current);
    setIsShownColorbtns(false);
  };

  const dispatch = useDispatch();

  const handleFilterList = (selectedFilter) => {
    dispatch(filteredStickersList(selectedFilter));
  };

  const colorBtns = (
    <ColorsList onFilterList={handleFilterList} openDrawer={openDrawer} />
  );
  const categoryBtns = (
    <CategoriesList onFilterList={handleFilterList} openDrawer={openDrawer} />
  );

  const btnSize = { fontSize: 31 };

  const paletteIcon = (
    <PaletteIcon className="list-modifications-btns" sx={btnSize} />
  );

  const categoryRoundedIcon = (
    <CategoryRoundedIcon className="list-modifications-btns" sx={btnSize} />
  );

  return (
    <>
      <WrapperListBtns
        buttons={colorBtns}
        handleClick={handleToggleColorFilterBtns}
        open={isShownColorbtn}
        openDrawer={openDrawer}
        label="Filter by color"
      >
        {!openDrawer ? (
          <Tooltip title="Filter by color" placement="right">
            {paletteIcon}
          </Tooltip>
        ) : (
          paletteIcon
        )}
      </WrapperListBtns>

      <WrapperListBtns
        buttons={categoryBtns}
        handleClick={handleToggleCategoryFilterBtns}
        open={isShownCategoryBtns}
        openDrawer={openDrawer}
        label="Filter by category"
      >
        {!openDrawer ? (
          <Tooltip title="Filter by color" placement="right">
            {categoryRoundedIcon}
          </Tooltip>
        ) : (
          categoryRoundedIcon
        )}
      </WrapperListBtns>
    </>
  );
};

export default FiltrationListBtns;
