import { Dialog } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ModalContent = ({
  children,
  onSubmit,
  openModal,
  closeModal,
  scroll,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Dialog
      maxWidth="md"
      fullScreen={fullScreen}
      fullWidth={true}
      component="form"
      onSubmit={onSubmit}
      open={openModal}
      onClose={closeModal}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      {children}
    </Dialog>
  );
};

export default ModalContent;
