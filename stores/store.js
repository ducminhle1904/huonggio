import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices/ui";
import { cartSlice } from "./slices/cart";
import { loadingSlice } from "./slices/loading";
import userReducer from "./slices/user";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        loading: loadingSlice.reducer,
        user: userReducer,
    },
});
