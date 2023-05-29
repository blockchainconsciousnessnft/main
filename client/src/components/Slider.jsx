import heroImage from "../assets/heroImage.png";
import socialCommentator from "../assets/socialCommentator.png";
import meeting from "../assets/meeting.png";
import sharing from "../assets/sharing.png";
import business from "../assets/business.png";
import React from "react";
import { styled } from "styled-components";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const StyledCarousel = styled(Carousel)`
  height: 800px !important;
  width: 75vw;
  margin: 60px;

  .ant-carousel {
  .slick-next {
    &::before {
      content: 'Next';
    }
  }
  .slick-prev { 
    &::before {
      content: 'Prev';
    }
  }
}
`;

const FirstSlide = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 900px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: bolder;
`;

const SecondSlide = styled.div`
  background-image: url(${socialCommentator});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 900px;
  color: #f6ff00;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: bolder;
`;

const ThirdSlide = styled.div`
  background-image: url(${meeting});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 900px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: bolder;
`;

const FourthSlide = styled.div`
  background-image: url(${sharing});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 900px;
  color: #fff;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const FifthSlide = styled.div`
  background-image: url(${business});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 900px;
  color: #ff1395;
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
  margin-top: 560px;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: center;
`;

const renderText = (slideNo) => {
  // eslint-disable-next-line default-case
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
          A heaven for writers, artists, photographers, sociologists,
          anthropologists to earn from content contributions
        </Text>
      );
    case 4:
      return (
        <Text>
          A model for showcasing the tenets of a ideal decentralized sovereign
          system through its architecture, governance and fair inclusion
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

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ><RightOutlined /></div>
  )
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ><LeftOutlined /></div>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const Slider = () => {
  return (
    <StyledCarousel autoplay effect="fade" arrows {...settings}> 
      <FirstSlide>{renderText(1)}</FirstSlide>
      <SecondSlide>{renderText(2)}</SecondSlide>
      <ThirdSlide>{renderText(3)}</ThirdSlide>
      <FourthSlide>{renderText(4)}</FourthSlide>
      <FifthSlide>{renderText(5)}</FifthSlide>
    </StyledCarousel>
  );
};

export default Slider;
