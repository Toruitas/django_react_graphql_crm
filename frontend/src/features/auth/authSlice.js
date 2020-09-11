import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name:'auth',
    initialState:{
        loggedIn: localStorage.getItem('refresh_token')
    },
    reducers:{
        logout: (state, action) => {
            state.loggedIn = false;
        },
        login: (state, action) =>{
            state.loggedIn = localStorage.getItem('refresh_token');
        }
    }
});

export const {logout, login} = slice.actions;

export const logoutAsync = (history) => dispatch =>{
    localStorage.removeItem('refresh_token');
    dispatch(logout());
    history.push(`/login/`)
}

export const loginAsync = (loginMut, values, history) => dispatch =>{
    // const refresh_token = loginMut({variables:{
    //         username: values.username,
    //         password: values.password
    //     }
    // });
    // localStorage.setItem('refresh_token', refresh_token);
    dispatch(login());
    history.push(`/dashboard/`)
}

export const selectLoggedIn = state => state.auth.loggedIn;

export default slice.reducer;
                            