import React from 'react'
import styled from 'styled-components'
import Boost from '../assets/bg-boost-desktop.png'
const Boosts = () => {
  return (
    <Container>
        <Topic>Book your links today</Topic>
        <Getstarts>Get Starts</Getstarts>
    </Container>
  )
}

export default Boosts

const Container=styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 200px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    background-image:url(${Boost});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    background-color:#3b3054 ;
    justify-content: center;
`;
const Topic=styled.h1`
    font-size: 2.4rem;
    justify-content: center;
    display: flex;
    color: white;
    text-align: center;
`
const Getstarts=styled.button`
      padding: 12px 25px;
      display: flex;
      justify-content: center;
  background-color: #52c2eb;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
`