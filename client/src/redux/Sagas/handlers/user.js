import {
    call,
    put
  } from "redux-saga/effects";

  import { login } from "../requests/auth";

  import { loginSuccess,loginFailed } from "../../Slices/User";

  export function* handleLogin(action){
    
    try {
        const res=yield call(login,action.payload);
        console.log(res);
        const {data} = res;
            
            if(res.status<300){
                yield put(loginSuccess(data));
            }
            else{
                yield put(loginFailed());
            }

    } catch (error) {
        console.log(error);
        yield put(loginFailed());
    }
  }