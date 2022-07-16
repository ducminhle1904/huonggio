import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "../../components/Common/Toast";
import { ApiHandleCart, ApiGetCart } from "../../helpers/apiHelper";

const initialState = {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};
const token = typeof window !== "undefined" ? window.localStorage.getItem("access_token") : "";
const addProductObj = {};
const updateProductObj = {
    cart_update_detail: {},
};
export const getCart = createAsyncThunk("cart/getCart", async (params) => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
        return ApiGetCart(token);
    }
});

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex === -1) {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
                if (token) {
                    addProductObj.product_id = action.payload.product_id;
                    ApiHandleCart(false, token, addProductObj);
                }
                toast({ type: "success", message: "Thêm vào giỏ hàng thành công" });
            } else {
                state.cart[itemIndex].quantity++;
                if (token) {
                    updateProductObj.cart_update_detail.product_id = action.payload.product_id;
                    updateProductObj.cart_update_detail.quantity = state.cart[itemIndex].quantity;
                    ApiHandleCart(true, token, updateProductObj);
                }
                toast({ type: "success", message: "Cập nhật giỏ hàng thành công" });
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity--;
                if (token) {
                    updateProductObj.cart_update_detail.product_id = action.payload.product_id;
                    updateProductObj.cart_update_detail.quantity = state.cart[itemIndex].quantity;
                    ApiHandleCart(true, token, updateProductObj);
                }
                if (state.cart[itemIndex].quantity === 0) {
                    state.cart.splice(itemIndex, 1);
                    toast({ type: "info", message: "Sản phẩm đã được bỏ khỏi giỏ hàng" });
                }
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity++;
                if (token) {
                    updateProductObj.cart_update_detail.product_id = action.payload.product_id;
                    updateProductObj.cart_update_detail.quantity = state.cart[itemIndex].quantity;
                    ApiHandleCart(true, token, updateProductObj);
                }
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart.splice(itemIndex, 1);
                if (token) {
                    updateProductObj.cart_update_detail.product_id = action.payload.product_id;
                    updateProductObj.cart_update_detail.quantity = 0;
                    ApiHandleCart(true, token, updateProductObj);
                }
                toast({ type: "info", message: "Sản phẩm đã được bỏ khỏi giỏ hàng" });
            }
        },
        getTotals(state, action) {
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
    extraReducers: {
        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload.cart || [];
        },
        [getCart.rejected]: (state, action) => {
            state.cart = [];
        },
    },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
