import { configureStore } from '@reduxjs/toolkit';

import { gasApi } from '../services/gasApi';

export default configureStore({
  reducer: {
    [gasApi.reducerPath]: gasApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gasApi.middleware)
});
