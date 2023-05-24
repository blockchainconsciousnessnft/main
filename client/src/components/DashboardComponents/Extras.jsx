import React from 'react'
import { styled } from 'styled-components';
import { Button } from 'antd'
import magazine from "../../assets/magazine.png";
import mint from '../../assets/mint.png';

const ExtrasDiv = styled.div`
  width: 25vw;
  height: 90.5vh;
`;

const Card1 = styled.div`
  width: 280px;
  height: 345px;
  margin: 24px 24px 0;
  border: 1px solid black;
  border-radius: 8px;
  background-image: url(${mint});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card2 = styled.div`
  width: 280px;
  height: 345px;
  margin: 24px 24px 0;
  border: 1px solid black;
  border-radius: 8px;
  padding: 28px;
  background-color: #D7CBC1;
;
`;

const Card1Container = styled.div`
  padding: 10px;
  height: 200px;
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.p`
  width: 258px;
  height: 64px;
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #F3F3F3;
  text-align: center;
  margin-bottom: 30px;
`;

const Text2 = styled.p`
  width: 255px;
  height: 48px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #F3F3F3;
  text-align: center;
`;

const ImageDiv = styled.div`

  width: 100%;
  height: 230px;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 16px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  width: 224px;
  height: 56px;
  background-color: #F3F3F3;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  span{
    color: #000;
  }

`;

const Extras = () => {
  return (
    <ExtrasDiv>
      <Card1>
        <Card1Container>
          <Text1>Do you want to Mint your enlightenment?</Text1>
          {/* <Text2>Mint your enlightenment Mint your enlightenment</Text2> */}
          <StyledButton>Mint Now</StyledButton>
        </Card1Container>
      </Card1>
      <Card2>
          <ImageDiv></ImageDiv>
          <StyledButton>Place Order</StyledButton>
      </Card2>
    </ExtrasDiv>
  );
}

export default Extras