import { Box } from '@mui/material';

import ListBtns from './ListBtns';
import CategoryIcons from './CategoryIcons';

import { categories } from '../../buttons-arrays/ButtonsArrays';

const CategoriesList = ({
  onModifyCategory,
  onFilterList,
  openDrawer,
  openModal,
}) => {
  const handle = onModifyCategory
    ? (arg) => onModifyCategory(arg)
    : (arg) => onFilterList(arg);

  const content = categories.map((category) => {
    return (
      <ListBtns
        openModal={openModal}
        openDrawer={openDrawer}
        key={category.description}
        description={category.description}
        onClick={() => {
          handle(category);
        }}
      >
        <Box sx={{ pl: 0.5 }}>
          <CategoryIcons category={category.value} />
        </Box>
      </ListBtns>
    );
  });

  return <>{content}</>;
};

export default CategoriesList;
