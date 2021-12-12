import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    email: '',
    error:''

}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
     
        loginSuccess: (state, { payload }) => {        
            state.isAuth = true;
            state.error = '';
            state.email = payload;
        },
        loginFail: (state, { payload }) => {
            state.error = payload;
        },
        logoutSuccess: (state) => {
            state.isAuth = false;
            state.error = '';
            state.email = '';
        },
      
    }
})

const { reducer, actions } = loginSlice;

export const { loginFail,  loginSuccess, logoutSuccess } = actions;

export default reducer
