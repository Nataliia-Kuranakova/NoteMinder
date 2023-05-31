import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CategoryIcons = ({ category }) => {
  let buttonIcon;
  switch (category) {
    case 'hobby':
      buttonIcon = <SportsSoccerOutlinedIcon />;
      break;
    case 'work':
      buttonIcon = <WorkOutlineOutlinedIcon />;
      break;
    case 'project':
      buttonIcon = <TableRowsOutlinedIcon />;
      break;
    case 'study':
      buttonIcon = <MenuBookOutlinedIcon />;
      break;
    case null:
      buttonIcon = <CheckBoxOutlineBlankIcon />;
      break;
    default:
      buttonIcon = <ErrorOutlineIcon />;
  }

  return <div>{buttonIcon}</div>;
};

export default CategoryIcons;
