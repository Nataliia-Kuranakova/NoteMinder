import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stickersApi = createApi({
  reducerPath: 'stickers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints(builder) {
    return {
      fetchStickers: builder.query({
        providesTags: (result, error, arg) => {
          const tags = result.map((sticker) => {
            return { type: 'Sticker', id: sticker.id };
          });
          tags.push({type: 'Sticker' })
          return tags;
        },
        query: () => {
          return {
            url: '/stickers',
            method: 'GET',
          };
        },
      }),
      addSticker: builder.mutation({
        invalidatesTags: (resalt, error, arg) => {
          return [{ type: 'Sticker' }];
        },
        query: (obj) => {
          return {
            method: 'POST',
            url: '/stickers',
            body: {
              title: obj.title,
              body: obj.body,
              category: obj.category,
              bgColor: obj.bgColor,
            },
          };
        },
      }),
      removeSticker: builder.mutation({
        invalidatesTags: (result, error, stickerId) => {
          return [{ type: 'Sticker', id: stickerId }];
        },
        query: (id) => {
          return {
            method: 'DELETE',
            url: `/stickers/${id}`,
          };
        },
      }),
      editSticker: builder.mutation({
        invalidatesTags: (result, error, stickerId) => {
          return [{ type: 'Sticker'}];
        },
        query: (obj) => {
          return {
            method: 'PATCH',
            url: `/stickers/${obj.id}`,
            body: {
              title: obj.title,
              body: obj.body,
              category: obj.category,
              bgColor: obj.bgColor,
            },
          }
        }
      })
    };
  },
});

export const {
  useFetchStickersQuery,
  useAddStickerMutation,
  useRemoveStickerMutation,
  useEditStickerMutation,
  useFetchFiltredStickersQuery
} = stickersApi;

export { stickersApi };
