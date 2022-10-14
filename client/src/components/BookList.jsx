import React, { useState } from 'react'
import styled from 'styled-components';
import Book from './Book';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const BookContainer = styled.div`
  padding: 20px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BookList = ({books}) => {
  return (
    <Container>
        <BookContainer>
            {
                books.map((book)=><Book item={book} key={book._id}/>)
            }
        </BookContainer>
    </Container>
  )
}

export default BookList;