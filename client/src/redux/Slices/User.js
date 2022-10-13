import {
    createSlice,
} from "@reduxjs/toolkit";



const UserSlice=createSlice({
    name:"User",
    initialState:{
        user:{},
        token:"",
        isFetching: false,
        isError: false,
        success: false,
    },
    reducers:{
        loginStart:(state,action)=>{
            state.isFetching=true;
            state.isError=false;
            state.success=false;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.isError=false;
            state.success=true;
            state.user=action.payload;
            state.token=action.payload.accessToken;
        },
        loginFailed:(state)=>{
            state.isFetching=false;
            state.success=false;
            state.isError=true;
            
        },
        logout:(state)=>{
            
            state.user={};
            state.token="";
            state.isError=false;
            state.isFetching=false;
            state.success=false;
            console.log("Logout");
        }
    }
});

export const {loginStart,loginSuccess,loginFailed,logout} =UserSlice.actions;
export default UserSlice.reducer;