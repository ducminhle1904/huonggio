import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openPanel: false,
};

export const uiSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        togglePanel: (state) => {
            state.openPanel = !state.openPanel;
        },
    },
});

// Action creators are generated for each case reducer function
export const { togglePanel } = uiSlice.actions;

export default uiSlice.reducer;
