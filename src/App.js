import WebPage from './components/web/WebPage';
import MobilePage from './components/mobile/MobilePage'

import { Box } from '@mui/material';

import './styles/main.scss';

function App() {
  return (
    <>
      <Box className="hiden_web-version">
        <WebPage />
      </Box>
      <Box className="hiden_mobile-version">
        <MobilePage />
      </Box>
    </>
  );
}

export default App;



