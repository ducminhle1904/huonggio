import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiLogin, ApiGetUser } from "../../helpers/apiHelper";
import toast from "../../components/Common/Toast";
import Router from "next/router";

//  Thunk API
export const signInApi = createAsyncThunk("user/signIn", async (params, thunkAPI) => {
    const response = await ApiLogin(params);
    // Save access token to storage
    if (response.response_status !== "success") {
        toast({ type: response.response_status, message: response.response_message });
        return;
    }
    if (response.response_status === "success") {
        const { access_token, token_type, user } = response;
        const accessToken = `${token_type} ${access_token}`;
        window.localStorage.setItem("access_token", accessToken);
        window.localStorage.setItem("userID", user.user_id);
        toast({ type: response.response_status, message: response.response_message });
        Router.push("/");
    }
});

export const getMe = createAsyncThunk("user/getMe", async (params) => {
    const userId = window.localStorage.getItem("userID");
    const token = window.localStorage.getItem("access_token");
    if (userId) {
        return ApiGetUser(userId, token);
    }
});

// ---------------------
//      MAIN SLICE
// ---------------------
const userSlice = createSlice({
    name: "user",
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.current = action.payload || {};
        },
        [getMe.rejected]: (state, action) => {
            state.current = {};
        },
    },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
