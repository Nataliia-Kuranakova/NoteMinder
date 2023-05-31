import { useSelector } from 'react-redux';

import { useFetchStickersQuery } from '../../store';

import { motion, AnimatePresence } from 'framer-motion';
import { noteContainerVariants } from '../../animation/stickersListAnimation';
import { cardVariants } from '../../animation/stickerAnimation';

import Masonry from 'react-masonry-css';

import { Box, Container } from '@mui/system';

import ErrorMsg from './ErrorMsg';
import EmptyListMsg from './EmptyListMsg';
import Spinner from './Spinner';
import Sticker from './Sticker';
import ActiveFilter from './ActiveFilter';
import EmptyFiltrationBtn from './EmptyFiltrationBtn';

const StickersList = () => {
  const { data, error, isLoading } = useFetchStickersQuery();

  const { activeFilter, isSelectedFilter } = useSelector(
    (state) => state.filters
  );

  const filtredStickers = (arr) => {
    if (activeFilter === 'all') {
      return arr;
    } else {
      return arr.filter(
        (elem) =>
          elem.bgColor === activeFilter || elem.category === activeFilter
      );
    }
  };

  const renderedStickers = (arr) => {
    const result = arr.map(({ id, ...props }) => {
      return (
        <AnimatePresence key={id}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Sticker id={id} {...props} />
          </motion.div>
        </AnimatePresence>
      );
    });
    return result;
  };
  const renderedEmptyResults = (arr) => {
    if (arr.length === 0 && activeFilter !== 'all') {
      return <EmptyFiltrationBtn />;
    } else if (arr.length === 0 && activeFilter === 'all') {
      return <EmptyListMsg />;
    }
  };

  const getFilteredArray = (arr) => {
    if (arr.length === 0 && activeFilter !== 'all') {
      return true;
    } else return false;
  };

  let content;
  let aditionalInformation;
  let differentChip;
  if (isLoading) {
    aditionalInformation = <Spinner />;
  } else if (error) {
    aditionalInformation = <ErrorMsg />;
  } else {
    const filtredContent = filtredStickers(data);
    aditionalInformation = renderedEmptyResults(filtredContent);
    differentChip = getFilteredArray(filtredContent);
    content = renderedStickers(filtredContent);
  }

  const breakpointsStickers = {
    default: 6,
    1440: 4,
    1200: 4,
    1024: 3,
    820: 2,
    550: 1,
  };

  return (
    <>
      <ActiveFilter differentChip={differentChip} />
      <Container maxWidth={false}>{aditionalInformation}</Container>
      <Container maxWidth={false}>
        <Box
          component={motion.div}
          variants={noteContainerVariants}
          initial="hidden"
          animate="visible"
          sx={{ ...(isSelectedFilter && { mt: 3 }) }}
        >
          <Masonry
            breakpointCols={breakpointsStickers}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {content}
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

export default StickersList;
