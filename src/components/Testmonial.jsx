import React from 'react'
import styled from 'styled-components'
import Brand from '../assets/icon-brand-recognition.svg'
import Details from '../assets/icon-detailed-records.svg'
import Costoms from '../assets/icon-fully-customizable.svg'

const Testmonial = () => {
  return (
  <Container>
    <Tops>
    <Topic>Advanced Statistics</Topic>
    <Texts>Tracks how your links areperforimg across the web with our advanced staistics dashborad</Texts>
    </Tops>
      <CardContainer>
        <CardItem1>
          <Images><img src={Brand} alt="" /></Images>
          <h3>Brand Recogionition</h3>
          <p>
            "This product helped me increase productivity by 70%! Highly
            recommended for everyone."
          </p>
        </CardItem1>

        <CardItem2>
          <Images><img src={Details} alt="" /></Images>
          <h3>Detailed Records</h3>
          <p>
            "The interface is clean and easy to use. Customer support is also
            fantastic increase productivity!"
          </p>
        </CardItem2>
         <CardItem3>
          <Images><img src={Costoms} alt=""/></Images>
          <h3>Fully Customizible</h3>
          <p>
            "The interface is clean and easy to use. Customer support is also
            fantastic increase productivity!"
          </p>
        </CardItem3>
      </CardContainer>
    </Container>
  );
};

export default Testmonial
const Container = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

`;
const Tops=styled.div`
  
  flex-direction: row;
  align-content: center;
  justify-content: center;
`
const Topic=styled.h1`
  font-size: 2.5rem;
`;
const Texts=styled.p`
  color: gray;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  padding-top: 50px;
  
  &::before {
    content: '';
    position: absolute;
    top: 180px;
    left: 20%;
    right: 20%;
    height: 8px;
    background-color: #52c2eb;
    z-index: 0;

    @media (max-width: 768px) {
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 80%;
    }
  }
  
`;


const CardItem1 = styled.div`
  position: relative;
  background: white;
  padding: 60px 20px 30px;
  border-radius: 12px;
  max-width: 300px;
  height: max-content;
  text-align: center;
  z-index: 1;

  h1{
    margin-top: 16px;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin-top: 10px;
  }
`;

const CardItem2 = styled.div`
  position: relative;
  background: white;
  padding: 60px 20px 30px;
  border-radius: 12px;
  max-width: 300px;
  margin-top: 40px;
  text-align: center;
  z-index: 1;
  height: max-content;
@media (max-width: 738px){
  margin-top: 10px;
}
  h3 {
    margin-top: 16px;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin-top: 10px;
  }
`;

const CardItem3 = styled.div`
   position: relative;
  background: white;
  padding: 60px 20px 30px;
  border-radius: 12px;
  max-width: 300px;
  margin-top: 80px;
  height: max-content;
  text-align: center;
  z-index: 1;
@media (max-width: 738px){
  margin-top: 10px;
}
  h3 {
    margin-top: 16px;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin-top: 10px;
  }
`;
const Images = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #3b3054;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  left: 20%;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 30px;
    height: 30px;
  }
  @media(max-width:738px){
    left: 50%;
  }
`;

