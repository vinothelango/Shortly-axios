
import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import CardContext from './CardContext';
import Testmonial from './Testmonial';
import Boosts from './Boosts';
import Footer from './Footer';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <Subcontainer>
          <Logo>Shortly</Logo>

          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Hamburger>

          <NavArea open={menuOpen}>
            <NavItems>Features</NavItems>
            <NavItems>Pricing</NavItems>
            <NavItems>Resources</NavItems>
            <Buttons>
              <LoginBtn>Login</LoginBtn>
              <RegisterBtn>Register</RegisterBtn>
            </Buttons>
          </NavArea>
        </Subcontainer>
      </Container>


      <Hero />
      <CardContext />
      <Testmonial />
      <Boosts />
      <Footer />
    </>
  );
};

export default Header;
const Container = styled.nav`
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px 40px;
  font-family: 'Poppins', sans-serif;
`;

const Subcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #000;
  margin-left: 120px;
   @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavArea = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 15px;
    padding: 20px 0;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const NavItems = styled.a`
  font-size: 1rem;
  color: #1a1818;
  cursor: pointer;

  &:hover {
    color: #52c2eb;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

const LoginBtn = styled.button`
  background: transparent;
  color: #5b5f63;
  padding: 10px;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #52c2eb;
    color: #fff;
  }
`;

const RegisterBtn = styled.button`
  background-color: transparent;
  color: #1a1818;
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #52c2eb;
    color: #fff;
  }
`;
