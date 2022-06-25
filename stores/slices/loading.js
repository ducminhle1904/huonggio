import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchLoading: false,
    error: null,
};

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSearchLoading: (state, action) => {
            state.searchLoading = action.payload;
        },
    },
});
export const { setLoading, setSearchLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
