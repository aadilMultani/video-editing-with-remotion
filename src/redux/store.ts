import { configureStore } from '@reduxjs/toolkit';
import { videoReducer } from './reducer/videoReducer';
import { videoConfigReducer } from './reducer/videoConfigReducer';
import { videotrimReducer } from './reducer/videotrimReducer';

const store = configureStore({
    reducer: {
        video: videoReducer,
        videoConfigReducer,
        videotrimReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;