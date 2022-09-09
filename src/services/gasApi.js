import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gasApiHeaders = {
  'X-RapidAPI-Key': 'f05d128ef4msh19e3f34e45fc13ap176d6fjsn6718361abf24',
  'X-RapidAPI-Host': 'european-fuel-prices-live.p.rapidapi.com'
};
const baseUrl = 'https://european-fuel-prices-live.p.rapidapi.com/price';

const createRequest = (url) => ({ url, headers: gasApiHeaders });

export const gasApi = createApi({
  reducerPath: 'gasApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGasPrices: builder.query({
      query: () => createRequest('')
    })
  })
});

export const { useGetGasPricesQuery } = gasApi;
