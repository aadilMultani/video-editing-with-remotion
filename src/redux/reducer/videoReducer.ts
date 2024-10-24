import { createReducer } from "@reduxjs/toolkit";

const videoUrl = localStorage.getItem("videoUrl");
const initialState = {
    uploadedVideo: videoUrl ? videoUrl : '',
    loading: false
};

export const videoReducer = createReducer(initialState, (builder) => {
    builder.addCase("UPLOAD_REQUEST", (state) => {
        return { ...state, loading: true };
    });

    builder.addCase("UPLOAD_SUCCESS", (state: any, action: any) => {
        return { ...state, uploadedVideo: action.payload, loading: false }
    });

    builder.addCase("UPLOAD_FAIL", (state: any, action: any) => {
        return { ...state, error: action.payload, uploadedVideo: null, loading: false, }
    });
});