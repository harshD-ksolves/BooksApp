import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { login } from "../redux/actions";
// import { login } from "../redux/apiCalls";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/b/row-old-books-dark-background-banner-isolated-224303481.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 25%;
  padding: 20px;
  
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:10px  0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius:8px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #34a3a3;
    color:white;
    font-weight:600;
    }
`;

const Error=styled.span`
  color: red;
`;
const Success=styled.span`
  color: teal;
`;




const Login = () => {
  const {isError,success}=useSelector((state)=>state.user);
  const navigate=useNavigate();  


  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();

  const handleLogin=(e)=>{
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      login(dispatch,{username,password});
      setUserName("");
      setPassword("");
      navigate('/');
    } catch (error) {
    } 
  }





  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN</Title>
        <Form>
          <Input placeholder="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
          <Input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleLogin}>LOGIN</Button>
          {isError && <Error>Invalid Credentials</Error>}
          {success && <Success>Logged In</Success>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
