import React from 'react'
import styled from 'styled-components'
import Icon from '../assets/illustration-working.svg'
const Hero = () => {
  return (
<> 
<Maincontains>
    <Container>
        <Maintext>More than just shorter links</Maintext>
        <Para>Bulid your brand's recogition get detailed insights on how your links are performing</Para>
        <Starts>Get Started</Starts>
    </Container>
    <Illustration><img src={Icon} alt="" /></Illustration>
    </Maincontains>
    </>
  )
}

export default Hero
const Maincontains=styled.section`
    display: flex;
    flex-direction: row;
    margin: 20px 10px 20px 10px;
    justify-content: space-between;
     font-family: 'Poppins', sans-serif;
  font-weight: 600;
    /* text-align: center; */
     @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
const Container =styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
   justify-content: center;
    text-align:center;
    padding:0 20px;
`
const Maintext =styled.h1`
    font-size: 4rem;
    margin-bottom: 20px;
    max-width: 500px;
    align-items: flex-start;
    justify-items:baseline;
    @media (max-width: 768px) {
    font-size: 2.2rem;
  }`;

const Para =styled.p`
    /* font-size: small; */
    max-width: 600px;
    margin-bottom: 30px;
    color: gray;
    @media (min-width:738px){
    /* font-size: small; */
    }
`;
const Starts=styled.button`
     padding: 12px 25px;
  background-color: #52c2eb;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
`;
const Illustration =styled.div`
      /* flex: 1; */
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  /* position: sticky; */

  img {
    width: 100%;
    
   
  }

  /* @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;

    img {
      width: 100px;
    }
  } */
  `

