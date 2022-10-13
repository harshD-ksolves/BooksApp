import React,{useState} from 'react'
import styled from "styled-components";
import { publicRequest } from '../requestMethods';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://t3.ftcdn.net/jpg/04/27/15/08/360_F_427150821_oQOZiOLP6lnWQdUmUG0YgQiTUsjmaGwE.jpg")
      center;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
  border:2px solid;
  border-radius: 4px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  margin: 8px 0px;
  border: none;
  border-radius:8px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error=styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  margin:4px 0px;
`;
const Success=styled.span`
  color: teal;
  font-size: 14px;
  font-weight: 500;
  margin:4px 0px;
`;
const Register = () => {
  const initialState = {
    username:"",
    email:"",
    password:'',
    confirmPass:"",
  }

  const [inputs,setInputs]=useState(initialState);
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

const validateInputs=()=>{  
  if( inputs.username.length <=3 ){
    console.log(inputs.username.length)
    setError("Provide valid username!");
    return false;
  }
  if(inputs.email.length == 0){
    console.log(inputs.email.length);
    setError("Provide valid email address!");
    return false;
  }
  if(inputs.password.length==0){
    setError("Provide password");
    return false;
  }
  if(inputs.confirmPass.length==0){
    setError("Provide Confirm password");
    return false;
  }
  if(inputs.password !==inputs.confirmPass){
    setError("password do not match!");
    return false;
  }
  setError("");
  return true;
}


  const handleSubmit=async(e)=>{

    e.preventDefault();
    if(!validateInputs()){
      return;
    }
    const {confirmPass, ...data}=inputs;
    try {
      const res=await publicRequest.post('auth/register',data);
      if(res.data.success){
        setSuccess("User Registered Successfully!");
        setInputs(initialState);
      }
    } catch (error) {
      setError(error.message);
    }
    console.log(inputs);
  }
  
    return (
        <Container>
            <Wrapper>
                <Title> CREATE AN ACCOUNT</Title>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Input placeholder="username" value={inputs.username} name="username" onChange={(e)=>handleChange(e)} />
                    <Input placeholder="email"type="email"  value={inputs.email} name="email" onChange={(e)=>handleChange(e)}/>
                    <Input placeholder="password" value={inputs.password} name="password" onChange={(e)=>handleChange(e)}/>
                    <Input placeholder="confirm password" value={inputs.confirmPass} name="confirmPass" onChange={(e)=>handleChange(e)}/>
                    <Button>CREATE</Button>
                </Form>
                {error &&<Error>{error}</Error>}
                {success && <Success>{success}</Success>}
            </Wrapper>
        </Container>
    )
}   

export default Register;