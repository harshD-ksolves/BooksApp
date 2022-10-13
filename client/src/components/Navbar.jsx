import React from 'react';
import { useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions';
const Container = styled.div`
    height: 60px;
    width:100vw;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color:teal ;
  color:white;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
 
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItems = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {

  const auth=useSelector((state)=>state.user);

  const navigate =useNavigate();
  const dispatch=useDispatch();
  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('persist:root');
    logoutUser(dispatch);
    navigate('/login');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
          <Logo>
            BooksApp
          </Logo>
        </Center>
        <Right>
          <Link to="/">
            <MenuItems>
              Home
            </MenuItems>
          </Link>
          {
            !auth?.token && <Link to="/register"><MenuItems>Register</MenuItems></Link>
          }
          {
            !auth?.token && <Link to="/login"> <MenuItems>Login</MenuItems></Link>
          }
          {
            auth?.token && <Link to="/myBooks"> <MenuItems>My Books</MenuItems></Link>
          }
          {
            auth?.token && <MenuItems> <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {auth.user.username}
            </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                  <Link className='dropdown-item' to="/" onClick={(e)=>handleLogout(e)} >Logout</Link>
                </li>
              </ul></MenuItems>
          }
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;