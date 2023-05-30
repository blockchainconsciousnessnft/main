import React, { useEffect } from "react";
import { styled } from "styled-components";
import { Button } from "antd";
import magazine from "../../assets/magazine.png";
import mint from "../../assets/mint.png";
import { useConsciousContext } from "../../context";
import { useAddress } from "@thirdweb-dev/react";

const ExtrasDiv = styled.div`
  width: 25vw;
  height: 90.5vh;
`;

const PremiumCard = styled.div`
  width: 280px;
  height: 345px;
  margin: 24px 24px 0;
  border: 1px solid black;
  border-radius: 8px;
  padding: 14px;;
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
  background-color: #d7cbc1;
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
  font-family: "Clash Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #f3f3f3;
  text-align: center;
  margin-bottom: 30px;
`;

const Text2 = styled.p`
  width: 255px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
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
  background-color: #f3f3f3;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  span {
    color: #000;
  }
`;

const ProposalDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin:8px 0;
`;

const AllProposals = styled.div`
  height: 300px;
  width: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  
`;

const proposals = [
  {
    id: 1,
    topic: "Proposal 1",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
  {
    id: 2,
    topic: "Proposal 2",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
  {
    id: 3,
    topic: "Proposal 3",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
  {
    id: 4,
    topic: "Proposal 4",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
  {
    id: 5,
    topic: "Proposal 5",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
  {
    id: 6,
    topic: "Proposal 6",
    description: "Lorem ipsum dolor sit aet hsdfj...",
  },
];

const Extras = ({ typeOfUser }) => {
  const { addToWhiteList } = useConsciousContext()
  return (
    <ExtrasDiv>
      {typeOfUser === "premium" ? (
        <PremiumCard>
          <div style={{ fontSize: '20px', color: '#000', fontWeight: 'bold'}}>Proposals</div>
          <AllProposals>
            {proposals.map((proposal) => {
              return (
                <ProposalDiv>
                  <Text2 style={{ color: '#4A4A4A', fontWeight: 'bold'}}>{proposal.topic}</Text2>
                  <Text2>{proposal.description}</Text2>
                </ProposalDiv>
              );
            })}
          </AllProposals>
        </PremiumCard>
      ) : (
        <Card1>
          <Card1Container>
            <Text1>Do you want to Mint your enlightenment?</Text1>
            <StyledButton onClick={addToWhiteList}>Mint Now</StyledButton>
          </Card1Container>
        </Card1>
      )}
      <Card2>
        <ImageDiv></ImageDiv>
        <StyledButton>Place Order</StyledButton>
      </Card2>
    </ExtrasDiv>
  );
};

export default Extras;
