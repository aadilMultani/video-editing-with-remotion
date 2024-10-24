import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    minVal: 0,
    maxVal: 0,
};

export const videotrimReducer = createReducer(initialState, (builder) => {
    builder.addCase('VIDEO_TRIM_VALUE', (state: any, action: any) => {
        return { ...state, ...action.payload }
    });
});