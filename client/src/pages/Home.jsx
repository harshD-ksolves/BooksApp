import React, { Suspense, useState, lazy } from 'react'
import Navbar from '../components/Navbar';


import { Routes, Route,useNavigate} from "react-router-dom";
import PrivateRoute from '../utils/PrivateRoute';
import MyBooks from './MyBooks';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';




const Books=lazy(()=>import('./Books'));
const Login=lazy(()=>import('./Login'));
const Register=lazy(()=>import('./Register'));
const BookDetails=lazy(()=>import('./BookDetails'));
const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          
          <Route exact path="/" element={<Books/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/book/:id" element={<BookDetails/>}/>
            <Route path="/myBooks" element={<MyBooks/>} />
            <Route path="/addBook" element={<AddBook/>}/>
            <Route path="updatebook/:id" element={<UpdateBook/>}/>
          </Route>  
        </Routes>
      </Suspense>
    </div>
  );
}

export default Home;