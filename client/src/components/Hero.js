import React from "react";
import heroImage from "../assets/heroImage.png";
import { styled } from "styled-components";
import { Carousel } from "antd";
import { motion } from "framer-motion";

const StyledCarousel = styled(Carousel)`
  height: 800px !important;
  margin: 60px;
  border-radius: 15px;
`;

const FirstSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const SecondSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const ThirdSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const FourthSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const FifthSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 1200px;
  margin: auto;
  margin-top: 350px;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100% !important;
  height: auto;
`;

const renderText = (slideNo) => {
  switch (slideNo) {
    case 1:
      return (
        <Text>
          A healing oasis for the web 3 community; through spiritual alignment
          teachings we preach self love and self wholeness and the first step to
          healthy social engagements
        </Text>
      );
    case 2:
      return (
        <Text>
          A central hub for discussions about community structures, the social
          impacts of decentralization and the evolution of web 3 ideals into
          everyday life
        </Text>
      );
    case 3:
      return (
        <Text>
          A haven for writers, artists, photographers, sociologists,
          anthropologists to earn from content contributions
        </Text>
      );
    case 4:
      return (
        <Text>
          A model for showcasing the tenets of a ideal decentralized sovereign
          system through its architecture, governance and fair inclusio
        </Text>
      );
    case 5:
      return (
        <Text>
          Using Blockchain Technology to teach individual enlightenment, social
          cohesion and its enterprise. We preach, Exemplify and Exhibit
        </Text>
      );
  }
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <StyledCarousel autoplay>
        <FirstSlide>{renderText(1)}</FirstSlide>
        <SecondSlide>{renderText(2)}</SecondSlide>
        <ThirdSlide>{renderText(3)}</ThirdSlide>
        <FourthSlide>{renderText(4)}</FourthSlide>
        <FifthSlide>{renderText(5)}</FifthSlide>
      </StyledCarousel>
    </motion.div>
  );
};

export default Hero;
