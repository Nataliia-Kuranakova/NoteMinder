import DrawerMenu from './DrawerMenu';
import StickersList from '../mutual/StickersList';
import CreateNew from './CreateNew';

const MobilePage = () => {
  return (
    <>
      <DrawerMenu />
      <div className="list-spacing">
        <StickersList />
      </div>
      <CreateNew />
    </>
  );
};

export default MobilePage;
