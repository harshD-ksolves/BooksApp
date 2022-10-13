import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { deleteBook } from '../redux/actions';


const Info=styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 5px;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    border-radius:5px;
    z-index: 3;
    display: flex;
    flex-direction:vertical;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease;
`;

const Container=styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    border-radius:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d5e5eb;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }

`;
const Image=styled.img`
    height: 75%;
    z-index: 1;

`;

const TitleConatainer=styled.div`
    flex:1;
    height: 40%;
    width:40%;
    padding:5px;
    border-radius:12px;
    background-color: white;
    display: flex;
    flex-direction:column;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    position:relative;
    cursor:pointer;
    z-index:2;
    &:hover{
        background-color:#d9dfdd;
        opacity:1;
        transform: scale(1.2);
    }
`;
const Title = styled.span`
    flex:1;
    width:100%;
    color:#000000 ;
    font-weight: 600;
    font-size: 14px;
    text-align:center;
    
`;
const SubTitle = styled.span`
    font-size: 11px;
    font-weight: 500;
    color:#a9a9a9;
    width:100%;
    text-align:right;
`;
const ActionsConatiner=styled.div`
    flex:2;
    width:100%;
    display: flex;
    align-items:center;
    justify-content: space-around;
`;
const Button=styled.button`
    flex:1;
    max-width:30%;
`;

const Book = ({item}) => {
    const navigate=useNavigate();
    const user=useSelector((state)=>state.user.user);
    const dispatch=useDispatch();

    const handleDelete=(e,id)=>{
        e.preventDefault();
        const data={
            id,user:user._id
        }
        deleteBook(dispatch,data);
    }


  return (
    <Container >
        <Image src={item.img}/>
        <Info >
            <TitleConatainer >
                <Title>Title : {item.title}</Title>
                <Title>Author : {item.authors}</Title>
                <ActionsConatiner>
                    <Button className="btn btn-primary btn-sm" onClick={()=>navigate(`/book/${item._id}`)} >View</Button>
                   {
                    user && (user._id === item.user._id || user.isAdmin) && <Button className="btn btn-danger btn-sm" onClick={(e)=>handleDelete(e,item._id)}>Delete</Button>
                   } 
                </ActionsConatiner>
                <SubTitle>added by : {item.user.username}</SubTitle>
            </TitleConatainer>
        </Info>
    </Container>
  );
}

export default Book;