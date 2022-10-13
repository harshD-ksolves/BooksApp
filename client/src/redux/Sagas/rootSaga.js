import {
    takeLatest
} from "redux-saga/effects";
import {
    getBooksStart,
    addBooksStart,
    updateBooksStart,
    deleteBooksStart
} from "../Slices/Books";
import {
    loginStart
} from "../Slices/User";
import {
    handleaddBook,
    handleDeleteBook,
    handleFetchBooks,
    handleUpdateBook
} from "./handlers/books";
import {
    handleLogin
} from "./handlers/user";

export function* watcherSaga() {

    yield takeLatest(loginStart.type, handleLogin);

    yield takeLatest(getBooksStart.type, handleFetchBooks);
    yield takeLatest(addBooksStart.type, handleaddBook);
    yield takeLatest(updateBooksStart.type, handleUpdateBook);
    yield takeLatest(deleteBooksStart.type, handleDeleteBook);
}