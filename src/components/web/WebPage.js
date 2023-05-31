import { Box, CssBaseline } from '@mui/material';

import TitleStickersList from './TitleStickersList';
import StickersList from '../mutual/StickersList';
import DrawerMenu from './DrawerMenu';

const WebPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerMenu />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TitleStickersList />
        <StickersList />
      </Box>
    </Box>
  );
};

export default WebPage;
