import {
    createSlice
} from "@reduxjs/toolkit";



const BooksSlice = createSlice({
    name: "Books",
    initialState: {
        books: [],
        isFetching: false,
        isError: false,
        success: false,
    },
    reducers: {
        getBooksStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        getBooksSuccess: (state, action) => {
            state.books = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.success = true;
        },
        getBooksFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        addBooksStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        addBooksSuccess: (state, action) => {
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.books.push(action.payload);
        },
        addBooksFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        updateBooksStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
            
        },
        updateBooksSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.books[
                state.books.findIndex((item)=>item._id===action.payload._id)
            ]=action.payload;
        },
        updateBooksFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        deleteBooksStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        deleteBooksSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.books.splice(
                state.books.findIndex((item)=>item._id===action.payload),1    
            );
        },
        deleteBooksFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        }

    }
});

export const {
    getBooksStart,
    getBooksSuccess,
    getBooksFailed,
    addBooksStart,
    addBooksSuccess,
    addBooksFailed,
    updateBooksFailed,
    updateBooksSuccess,
    updateBooksStart,
    deleteBooksStart,
    deleteBooksSuccess,
    deleteBooksFailed
} = BooksSlice.actions;

export default BooksSlice.reducer