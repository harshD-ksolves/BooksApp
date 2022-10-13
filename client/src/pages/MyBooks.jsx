import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import BookList from '../components/BookList';


const Container = styled.div``;

const TopConatainer=styled.div`
  margin:10px 4px;
  padding:5px 0px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const Title = styled.h1`
  margin: 20px;
  font-weight:600;
  color: Black;
  &:hover{
    color:#077d48;
    cursor:pointer;
  }
`;

const AddButton=styled.button.attrs({
  className:'btn btn-success'
})`
  margin: 20px;
`;


const MyBooks = () => {
    const {user,books}=useSelector((state)=>state);
    const navigate=useNavigate();  


  return (
    <Container>
      <TopConatainer>
        <Title>My Books</Title>
        <AddButton onClick={()=>navigate('/addBook')}>Add Book</AddButton>
      </TopConatainer>
        
        <BookList books={books.books.filter((book)=>book.user._id===user.user._id)}/>
    </Container>
  )
}

export default MyBooks;