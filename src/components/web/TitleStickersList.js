import { Container, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import { mainTitleVariants } from '../../animation/stickersListAnimation';

const TitleStickersList = () => {
  return (
    <Container maxWidth={false}>
      <Typography
        variant="h4"
        pl={2.5}
        mt={2}
        sx={{ fontWeight: 500 }}
        component={motion.h4}
        variants={mainTitleVariants}
        initial="hidden"
        animate="visible"
      >
        Notes
      </Typography>
    </Container>
  );
};

export default TitleStickersList;
