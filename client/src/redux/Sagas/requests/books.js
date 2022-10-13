import { publicRequest, userRequest } from "../../../requestMethods";

export const getBooks=()=>{

    return publicRequest.get('books/');
}

export const addBook=(book)=>{

    return userRequest.post('books/',book);
}

export const updateBook=(book)=>{

    return userRequest.put(`books/${book._id}/${book.user}`,book);
}

export const deleteBook=(data)=>{
    console.log(data);
    return userRequest.delete(`books/${data.id}/${data.user}`);
}