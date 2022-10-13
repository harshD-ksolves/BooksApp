import {
  call,
  put
} from "redux-saga/effects";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook
} from "../requests/books";

import {
  getBooksSuccess,
  getBooksFailed,
  addBooksSuccess,
  addBooksFailed,
  updateBooksSuccess,
  updateBooksFailed,
  deleteBooksSuccess,
  deleteBooksFailed
} from "../../Slices/Books";

export function* handleFetchBooks() {

  try {
    const res = yield call(getBooks);
    const {
      data
    } = res;
    if (data.status) {
      yield put(getBooksSuccess(data.data));
    } else {
      yield put(getBooksFailed());
    }
  } catch (error) {
    console.log(error);
    yield put(getBooksFailed());
  }
}

export function* handleaddBook(action) {
  try {
    const res = yield call(addBook, action.payload);
    console.log(res);
    if (res.data.status) {
      yield put(addBooksSuccess(res.data.data));
    } else {
      yield put(addBooksFailed());
    }
  } catch (error) {
    console.log(error);
    yield put(addBooksFailed());
  }
}

export function* handleUpdateBook(action) {
  try {
    const res=yield call(updateBook,action.payload);
    const {data}=res;
    if(data.status){
      yield put(updateBooksSuccess(data.data));
    }else{
      yield put(updateBooksFailed());
    }
  } catch (error) {
    console.log(error);
    yield put(updateBooksFailed());
  }
}

export function* handleDeleteBook(action){
  try {
    const res=yield call(deleteBook,action.payload);
    const {data}=res;
    if(data.status){
      yield put(deleteBooksSuccess(action.payload.id))
    }else{
      yield put(deleteBooksFailed());
    }
  }catch(error){
    console.log(error);
    yield put(deleteBooksFailed());
  }
}