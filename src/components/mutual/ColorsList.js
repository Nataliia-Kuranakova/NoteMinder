import { colors } from '../../buttons-arrays/ButtonsArrays';

import CircleIcon from '@mui/icons-material/Circle';

import ListBtns from './ListBtns';

const ColorsList = ({ onModifyColor, onFilterList, openDrawer, openModal }) => {
  const handle = onModifyColor
    ? (arg) => onModifyColor(arg)
    : (arg) => onFilterList(arg);

  const content = colors.map((color) => {
    return (
      <ListBtns
        openModal={openModal}
        openDrawer={openDrawer}
        key={color.description}
        description={color.description}
        onClick={() => {
          handle(color);
        }}
      >
        <CircleIcon sx={{ color: color.value, fontSize: 31 }} />
      </ListBtns>
    );
  });

  return <>{content}</>;
};

export default ColorsList;
