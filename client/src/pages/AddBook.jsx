import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {languages} from '../data';
import { addBook } from '../redux/actions';



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
  width: 50%;
  padding: 20px;
  border-radius:8px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align:center ;
`;

const AddForm=styled.form`
    border-radius:8px;
    border:1px solid green;
`;
const FormConatiner=styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content:space-between;
`;
const LeftForm=styled.div`
    flex: 1;
    width:100%;
    margin:8px 5px;
    padding:8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction:vertical ;
`;

const RightForm=styled.div`
    flex:1;
    margin:8px 5px;
    padding:8px;
    display: flex;
    flex-wrap:wrap ;
    flex-direction:vertical ;
`;
const InputLabel=styled.label`
    width:100%;
    margin:-5px  3px;
    padding: 8px;
    font-weight: 500;
    color:gray;
`;
const Input = styled.input`
  flex: 1;
  max-width:100% ;
  margin:5px  3px;
  padding: 8px;
  transition: 0.5s; 
  border:1px solid;
  border-radius:4px;
  &:active{
    border-color:green !important;
  }
`;

const SelectLabel=styled.label`
    width:100%;
    margin:0px  3px;
    padding: 8px;
    font-weight: 400;
    color:gray;
   
`;
const Select=styled.select`
`;
const Option=styled.option`
`;



const ButtonContainer=styled.div`
  margin:0px 6px;
  padding: 8px;
  display: flex;
  justify-content:space-between;
`;
const SubmitButton=styled.button`
  margin: 4px;
`
const CancelButton=styled.button`
  margin: 4px;
`;
const Error=styled.span`
  color: red;
  font-size: 16px;
  font-weight: 500;
  margin:4px 0px;
  width:100%;
  text-align:center;
  margin:12px;
  padding:12px;
`;



const AddBook = () => {
  const navigate=useNavigate();
  const initialState={
    title:"",
    authors:"",
    published:"",
    publisher:"",
    img:"",
    langauage:"",
    rating:""
  }
  const [inputs,setInputs]=useState(initialState);
  const [error,setError]=useState("");
  const user=useSelector((state)=>state.user.user._id);
  const dispatch=useDispatch();



  const validateInputs=()=>{
    if(!inputs.title.length){
      setError("Provide valid title!");
      return false;
    }
    if(!inputs.authors.length){
      setError("Provide valid Authors!");
      return false;
    }
    if(!inputs.published.length){
      setError("Provide valid published date!");
      return false;
    }
    if(!inputs.publisher.length){
      setError("Provide valid Publisher!");
      return false;
    }
    if(!inputs.img.length){
      setError("Provide valid Image Url!");
      return false;
    }
    if(!inputs.langauage.length){
      setError("Provide valid book language!");
      return false;
    }
    if(!inputs.rating.length){
      setError("Provide valid Rating!");
      return false;
    }
    setError("");
    return true;
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!validateInputs()){
      return;
    }

    const data={...inputs,user};
    addBook(dispatch,data);
    setInputs(initialState);
    console.log(data);
  }

  return (
    <Container>
        <Wrapper>
            <Title>Add Book</Title>
            <AddForm>
              <FormConatiner>
              <LeftForm>
                    <InputLabel htmlFor='title'>Book Title :</InputLabel>
                    <Input className="form-control" name="title" value={inputs.title || ''} placeholder="Enter Book Title" id='title' onChange={(e)=>handleChange(e)}/>
                    <InputLabel htmlFor='published'>Book Published :</InputLabel>
                    <Input className="form-control" name='published' value={inputs.published || ''} type="date" placeholder="published" id="published"onChange={(e)=>handleChange(e)} />
                    <InputLabel htmlFor='publisher'>Book Publisher :</InputLabel>
                    <Input className="form-control"name='publisher' value={inputs.publisher || ''} placeholder="Enter Book Publisher" id="publisher" onChange={(e)=>handleChange(e)}/> 
                    <SelectLabel htmlFor='language'>Select Language :</SelectLabel>
                        <Select id="language" className='form-select' name='language'  onChange={(e)=>handleChange(e)}>
                          <Option>Select Language</Option>
                          {
                              languages.map((lang)=><option value={lang} key={lang} {...inputs.langauage===lang?'selected':''}  >{lang}</option>)
                          } 
                        </Select>
                </LeftForm>
                <RightForm>
                    <InputLabel htmlFor='authors'>Book Author/Authors :</InputLabel>
                    <Input className="form-control" name='authors' value={inputs.authors|| ''} placeholder="Enter Book Author/Authors" id="authors" onChange={(e)=>handleChange(e)}/>
                    <InputLabel htmlFor='image'>Book Image Url :</InputLabel>
                    <Input className="form-control" name='img' value={inputs.img|| ''} placeholder="Enter Image Url"  id="image" onChange={(e)=>handleChange(e)}/>
                    <InputLabel htmlFor='price'>Book Price :</InputLabel>
                    <Input className="form-control" type='number' name='price' value={inputs.price|| ''} placeholder="Enter price" id="price" onChange={(e)=>handleChange(e)}/>
                    <InputLabel htmlFor='rating'>Book Rating :</InputLabel>
                    <Input className="form-control" name='rating' type='number' value={inputs.rating|| ''} placeholder="Enter Rating" id="rating" onChange={(e)=>handleChange(e)}/>
                </RightForm>
              </FormConatiner>
                <ButtonContainer>
                  <CancelButton className="btn btn-danger" onClick={()=>navigate('/myBooks')}>Cancel</CancelButton>
                  <SubmitButton className="btn btn-success" onClick={(e)=>handleSubmit(e)}>Submit</SubmitButton>
                </ButtonContainer>
                {error && <Error>{error}</Error>}
            </AddForm>
            
        </Wrapper>
    </Container>
  )
}

export default AddBook;