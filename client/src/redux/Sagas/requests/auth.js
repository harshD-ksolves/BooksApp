import { publicRequest } from "../../../requestMethods";


export const login=(user)=>{
    return publicRequest.post('auth/login',user);
}

