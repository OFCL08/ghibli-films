import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../config/constants';

export const HomeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllFilms: builder.query({ query: () => '/films' }),
  }),
  reducerPath: 'homeApi',
});

export const { useGetAllFilmsQuery } = HomeApi;
