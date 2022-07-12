import { createSlice } from "@reduxjs/toolkit";
import toast from "../../components/Common/Toast";

const initialState = {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

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
                toast({ type: "success", message: "Thêm vào giỏ hàng thành công" });
            } else {
                state.cart[itemIndex].quantity++;
                toast({ type: "success", message: "Cập nhật giỏ hàng thành công" });
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity--;
                if (state.cart[itemIndex].quantity === 0) {
                    state.cart.splice(itemIndex, 1);
                }
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity++;
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.product_id === action.payload.product_id);
            if (itemIndex !== -1) {
                state.cart.splice(itemIndex, 1);
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
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
