import React, { useEffect, useState } from "react";
import styled from "styled-components";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project6 from "../assets/project6.png";
import { BsGithub } from "react-icons/bs";
import { GiCursedStar } from "react-icons/gi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import NameOnHover from "../shared/NameOnHover";
import heroImage from "../assets/heroImage.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17rem;
  gap: 13rem;
  @media screen and (max-width: 640px) {
    gap: 7rem;
    margin-top: 10rem;
  }
  @media screen and (max-width: 450px) {
    gap: 4rem;
    margin-top: 10rem;
  }
`;

const RecentWorks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 8rem;
  align-items: center;
  font-size: 28px;

  @media screen and (max-width: 640px) {
    width: 90vw;
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    gap: 0.7rem;
  }

  h1 {
    font-size: 70px;
    font-weight: 600;

    @media screen and (max-width: 640px) {
      font-size: 40px;
      width: max-content;
      /* background-color: red; */
    }
    @media screen and (max-width: 450px) {
      font-size: 30px;
      width: max-content;
      /* background-color: red; */
    }
  }
  .star {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    @media screen and (max-width: 640px) {
      font-size: 30px;
    }
    @media screen and (max-width: 450px) {
      display: none;
    }
    @media screen and (max-width: 890px) {
      display: none;
    }
  }
`;
const Works = styled.div``;
const EachWorksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin-bottom: 100px;
  margin-left: 120px;
  /* background-color: red; */
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  /* overflow: hidden; */
  /* background-color: red; */
  @media screen and (max-width: 640px) {
    width: 85vw;
    margin: 0.5rem;
    align-items: flex-start;
  }
  @media screen and (max-width: 890px) {
    width: 85vw;
    align-items: flex-end;
    margin: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    overflow: hidden;
    letter-spacing: 2px;
    @media screen and (max-width: 640px) {
      font-size: 1.3rem;
    }
  }
  p {
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.7rem;
    letter-spacing: 2px;
    text-align: start;
    max-width: fit-content;
    @media screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;
const Link = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 0.6rem;
    border: 1px solid #ff636341;
    border-radius: 20px;
    @media screen and (max-width: 640px) {
      width: 85vw;
    }
    @media screen and (max-width: 890px) {
      width: 85vw;
    }

    a {
      color: #d6e5fa;
    }
  }
  .image {
    width: 500px;
    height: 250px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 640px) {
      width: 85vw;
    }
    @media screen and (max-width: 890px) {
      width: 85vw;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      object-fit: cover;
      transition: all 0.8s;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;

function Project() {
  const [display, setDisplay] = useState(false);
  const transition = { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] };
  const parent = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const letter = {
    initial: {
      y: 40,
      skewY: 2,
      opacity: 0,
    },
    animate: {
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: { duration: 1, ...transition },
    },
  };
  return (
    <Main data-scroll-section id="project">
      <RecentWorks>
        <motion.h2
          whileInView={{ y: [-40, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          The GOAL
        </motion.h2>
        <motion.h1
          whileInView={{ y: [-40, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          To{" "}
          <span style={{ color: "rgba(45,253,79,1)" }}>
            Preach, Exemplify and Exhibit
          </span>
        </motion.h1>
      </RecentWorks>

      {/* preach */}
      <Works
        data-scroll
        data-scroll-speed="-3"
        data-scroll-direction="horizontal"
      >
        <div style={{ marginBottom: "100px", marginLeft: "200px" }}>
          <motion.h1
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <span style={{ color: "rgba(45,253,79,1)" }}>1. Preach</span>
          </motion.h1>
          <motion.h2
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ marginTop: "30px" }}
          >
            We Preach Blockchain Consciousness as a path of enlightenment
            through our spiritual alignment inititiatives such as listed Below
          </motion.h2>
        </div>

        {/* first */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                Purpose, Oneness and Evolution
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              A community and social media initiative that curates content
              around individual inspiration and self through in the will to find
              purpose, to embody the virtues of tolerance and accomodation of
              all humanity regardless of race, religion, tribe or even
              perspective and to also see the need to harness pain and sorrow
              for the neccessary to full self capacity and mental clarity
            </motion.p>
          </Text>
        </EachWorksDiv>

        {/* second */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                Ubuntu Residency
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              A themed art and content submission bounty that invites creators
              and artists to submit content that correlates with the mantra of
              Blockchain Consciousness for an opportunity to earn rewards
            </motion.p>
          </Text>
        </EachWorksDiv>
      </Works>

      {/* exemplify */}
      <Works
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        <div style={{ marginBottom: "100px", marginLeft: "200px" }}>
          <motion.h1
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <span style={{ color: "rgba(45,253,79,1)" }}>2. Exemplify </span>
          </motion.h1>
          <motion.h2
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ marginTop: "30px" }}
          >
            We exemplify Blockchain Consciousness through our community
            architecture which fosters the virtue of caring, sharing and
            inclusion. At Blockchain Consciousness the community creates the
            content for the project`s initiatives, authorizesthe content and
            project trajectory and altogether earns from the revenue of the
            project through its revenue
          </motion.h2>
        </div>
      </Works>

      {/* exhibit */}
      <Works
        data-scroll
        data-scroll-speed="-3"
        data-scroll-direction="horizontal"
      >
        <div style={{ marginBottom: "100px", marginLeft: "200px" }}>
          <motion.h1
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <span style={{ color: "rgba(45,253,79,1)" }}>3. Exhibit </span>
          </motion.h1>
          <motion.h2
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ marginTop: "30px" }}
          >
            We exhibt through enterprise by projects that bring value and
            utility to the broad web 3 and crypto space which are as listed
            below
          </motion.h2>
        </div>

        {/* first */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                Blockchain Magazine
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              A weekly online and quarterly physical publications that
              highlights various activities within the demographies of the
              crypto and Blockchain industry. With Columns that range from "The
              race of Decentralization" to "NFT artists Profile" the publication
              embodies web 3 information and educative material presented in
              glam
            </motion.p>
          </Text>
        </EachWorksDiv>

        {/* second */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                Blockchain Clarity
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              An online platform for the simplified education of blockchain and
              crypto knolwdge for newbies and people who might not be able to
              keep up with the pace of the web3 space in understanding its
              terminiologies and technologies. The platform would align its
              educative materials in sequence and explanation as if to a 5 year
              old
            </motion.p>
          </Text>
        </EachWorksDiv>

        {/* third */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                Blockchain Encyclopaedia
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              An online repository for all entries about terms, technology, etx
              relation to blockchains. An encyclopaedia for web3
            </motion.p>
          </Text>
        </EachWorksDiv>

        {/* fourth */}
        <EachWorksDiv>
          <Link>
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.8 }}
              className="image"
            >
              <img loading="lazy" src={heroImage} alt="" />
            </motion.div>
          </Link>
          <Text
            variants={parent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={letter}>
              <span style={{ color: "rgba(45,253,79,1)" }}>
                The Agora Project
              </span>
            </motion.h2>
            <motion.p variants={letter}>
              A web 3 version of a Y combinator which networks founders,
              developers and project managers with the necessary resources to
              build Solutions for blockchains and web 3 projects while operating
              in a decentralized manner.
            </motion.p>
          </Text>
        </EachWorksDiv>
      </Works>
    </Main>
  );
}

export default Project;
