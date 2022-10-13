import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import BookList from '../components/BookList';
import { languages,BOOKS } from '../data';
import { getBooks } from '../redux/actions';


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
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterDropdown=styled.div.attrs({
  className:"dropdown me-4"
})``;
const FilterButton=styled.button.attrs({
  className:"btn dropdown-toggle btn-sm btn-success"
})``;

const FilterDropDownMenu=styled.ul.attrs({
  className:'dropdown-menu'
})``;

const Filter = styled.div`
  margin: 20px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const LangFilter = styled.div`
    padding: 10px;
    margin-right: 20px;
`;


const LangFilterList = ({ language, handleChange, langFilter }) => {

  return (
    <li>{
      langFilter.includes(language)
        ? <input className="form-check-input m-1" checked type="checkbox" value={language} id="flexCheckDefault" onChange={() => handleChange(language)} />
        : <input className="form-check-input m-1" type="checkbox" value={language} id="flexCheckDefault" onChange={() => handleChange(language)} />
    }
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {language}
      </label>
    </li>
  );
}


const Books = () => {

  const [langs,setLangs]=useState(languages);
  const [langFilter, setLangFilter ] = useState([]);
  const books=useSelector((state)=>state.books.books);
  const dispatch=useDispatch();

  useEffect(()=>{
    getBooks(dispatch);
  },[dispatch]);

  
  const handleChange = (lang) => {
    if (!langFilter.includes(lang)) {
      setLangFilter((langs)=>langs.concat(lang));      
    }
    else {
      const ls = langFilter.filter((l) => l !== lang);
      setLangFilter(ls);
    }
  }

  return (
    <Container>
      <TopConatainer>
      <Title>Books</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle >Filter Books</FilterTitle >
          <LangFilter>
          <FilterDropdown>
            <FilterButton id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              Select Book Language
            </FilterButton>
            <FilterDropDownMenu  aria-labelledby="dropdownMenu2">
              {
                langs.map((lang) => <LangFilterList language={lang} handleChange={handleChange} key={lang} langFilter={langFilter} />)
              }
            </FilterDropDownMenu>
          </FilterDropdown>
          </LangFilter>
        </Filter>
      </FilterContainer>
      </TopConatainer>
      
      <BookList books={langFilter.length > 0 ? books.filter((book)=>langFilter.includes(book.language)) : books }/>
    </Container>
  )
}

export default Books;