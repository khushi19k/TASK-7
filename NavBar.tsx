import React from 'react';
import styled from 'styled-components';
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined, StorefrontOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Container = styled.div`
  height: 70px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none; // Ensuring no outline when focused
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin: 0; 
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 15px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchInput />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>EBay</Logo>
        </Center>
        <Right>
          <Menu><StyledLink to="/Register">REGISTER</StyledLink></Menu>
          <Menu><StyledLink to="/Login">LOGIN</StyledLink></Menu>
          <Menu>
            <Badge badgeContent={4} color="primary">
            <StyledLink to="/Cart"><ShoppingCartOutlined /></StyledLink>
            </Badge>
          </Menu>
          <Menu>
            <Badge badgeContent={10} color="primary">
              <StorefrontOutlined />
            </Badge>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
