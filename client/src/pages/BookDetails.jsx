import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import styled from "styled-components";

const Container = styled.div``;
const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding:30px;
    margin:-30px;
`;
const EditButton = styled.button`
`;
const Wrapper = styled.div`
    padding: 50px 30px 0px 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 80%;
    height: 70vh;
    object-fit: fit;
    
    transition: transform .3s ease-in-out;
    &:hover{
        cursor:pointer;
        transform: scale(1.1);
    }

`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 500;
`;
const Desc = styled.div`
    margin: 20px 0px;
`;

const DescItem = styled.p`
    margin:4px 0px;
`;

const DescTitle = styled.span`
    font-weight: 400;
    font-size:20px;
`;
const DescInfo = styled.span`
    font-weight: 300;
    font-size:16px;
    margin-left: 5px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const BookDetails = () => {
    const books = useSelector((state) => state.books.books);
    const user = useSelector((state) => state.user.user);
    let { id } = useParams();
    const book = books.filter((book) => book._id === id)[0]
    const navigate=useNavigate();
    return (
        <Container>

            <Wrapper>
                <ImgContainer>
                    <Image src={book?.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{book?.title}</Title>
                    <Desc>
                        <DescItem>
                            <DescTitle>Authors :</DescTitle>
                            <DescInfo>{book?.authors}</DescInfo>
                        </DescItem>
                        <DescItem>
                            <DescTitle>Published :</DescTitle>
                            <DescInfo>{book?.published}</DescInfo>
                        </DescItem>
                        <DescItem>
                            <DescTitle>Publisher :</DescTitle>
                            <DescInfo>{book?.publisher}</DescInfo>
                        </DescItem>
                        <DescItem>
                            <DescTitle>Language :</DescTitle>
                            <DescInfo>{book?.language}</DescInfo>
                        </DescItem>
                        <DescItem>
                            <DescTitle>Rating :</DescTitle>
                            <DescInfo>{book?.rating}/5</DescInfo>
                        </DescItem>
                    </Desc>
                    <Price>${book?.price}</Price>
                </InfoContainer>
            </Wrapper>
            {
                user &&
                user._id === book.user._id
                && <ActionContainer>
                    <EditButton className='btn btn-success' onClick={()=>navigate(`/updatebook/${book._id}`)}>Update</EditButton>
                </ActionContainer>
            }
        </Container>
    )
}

export default BookDetails;