import React from 'react'
import styled from 'styled-components'
import Fb from '../assets/icon-facebook.svg'
import Twit from '../assets/icon-twitter.svg'
import Pins from '../assets/icon-pinterest.svg'
import Ins from '../assets/icon-instagram.svg'
const Footer = () => {
  return (
    <Container>
        <Topic>Shortly</Topic>
        <Subcontains>
            <Feature>
      <Top>Features</Top>
      <LinkStyle>Link Shortening</LinkStyle>
      <LinkStyle>Branded Links</LinkStyle>
      <LinkStyle>Analytics</LinkStyle>
    </Feature>

    <Feature>
      <Top>Resources</Top>
      <LinkStyle>Blog</LinkStyle>
      <LinkStyle>Developers</LinkStyle>
      <LinkStyle>Support</LinkStyle>
    </Feature>

    <Feature>
      <Top>Company</Top>
      <LinkStyle>About</LinkStyle>
      <LinkStyle>Careers</LinkStyle>
      <LinkStyle>Contact</LinkStyle>
    </Feature>
            
        </Subcontains>
        <Media>
            <img src={Fb} alt="" />
            <img src={Twit} alt="" />
            <img src={Pins} alt="" />
            <img src={Ins} alt="" />
        </Media>
    </Container>
  )
}

export default Footer
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    background: #28212b;
   font-family: 'Poppins', sans-serif;
  font-weight: 500;
   align-items: flex-start;
   padding: 2rem;
  flex-wrap: wrap;
   @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
const Subcontains=styled.div`
    display: flex;
    gap: 50px;
      @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
const Topic=styled.h1`
    
    color: #fcf6f6;
    font-size: 2rem;
`
const Feature=styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fcf6f6;
    margin-bottom: 2rem;

       @media (max-width: 768px) {
        gap:0px;
        align-items: center;
  }
`
const Top =styled.h3`
    /* font-size: 1rem; */
    display: flex;
`
const LinkStyle = styled.p`
  font-size: .8rem;
  color: #988f8f;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
  width: max-content;
  &:hover {
    color: #52c2eb;
  }
`;
const Media=styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
     &:hover {
    background-color: #52c2eb;
    
  }
  }
    @media (max-width: 768px) {
    justify-content: center;
  }
`