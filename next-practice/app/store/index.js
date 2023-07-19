import {configureStore} from '@reduxjs/toolkit';
import regionReducer from './region/regionSlices';

const store = configureStore({
    reducer:{
        regions: regionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
      }),
});

export default store;
