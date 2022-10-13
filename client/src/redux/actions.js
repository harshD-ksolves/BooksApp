import { loginStart,logout } from "./Slices/User";
import { addBooksStart, getBooksStart,deleteBooksStart,updateBooksStart } from "./Slices/Books";

export const login=(dispatch,user)=>{
    console.log(user);
    dispatch(loginStart(user));
}

export const logoutUser=(dispatch)=>{
    dispatch(logout());
}

export const getBooks=(dispatch)=>{
    dispatch(getBooksStart());
}
export const addBook=(dispatch,data)=>{
    dispatch(addBooksStart(data));
}
export const updateBook=(dispatch,data)=>{
    dispatch(updateBooksStart(data));
}

export const deleteBook=(dispatch,id)=>{
    console.log(id);
    dispatch(deleteBooksStart(id));
}