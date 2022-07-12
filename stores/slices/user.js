import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiLogin } from "../../helpers/apiHelper";
import toast from "../../components/Common/Toast";

//  Thunk API
export const signInApi = createAsyncThunk("user/signIn", async (params, thunkAPI) => {
    const response = await ApiLogin(params);

    // Save access token to storage
    const { access_token, token_type } = response;
    const accessToken = `${token_type} ${access_token}`;
    localStorage.setItem("access_token", accessToken);
    toast({ type: "info", message: response.message });
});

export const getMe = createAsyncThunk("user/getMe", async (params) => userApi.getMe(params));

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
