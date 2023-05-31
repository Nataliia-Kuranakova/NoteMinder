import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { stickersApi } from './apis/stickersApi';
import { filtersReducer } from './slices/filtersSlice';
import { filteredStickersList, deleteSelectedFilter} from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [stickersApi.reducerPath]: stickersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(stickersApi.middleware)
      
  },
});

setupListeners(store.dispatch);

export {
  useFetchStickersQuery,
  useAddStickerMutation,
  useRemoveStickerMutation,
  useEditStickerMutation,
  useFetchFiltredStickersQuery,
} from './apis/stickersApi';

export { filteredStickersList, deleteSelectedFilter };
