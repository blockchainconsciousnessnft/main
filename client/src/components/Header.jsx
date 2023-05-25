import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TimeComponent from "./TimeComponent";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Button, Image } from "antd";
import logo from "../assets/logo.png";
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const Main = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  gap: 15rem;
  align-items: center;
  padding: 2rem 0;

  font-size: 18px;
  margin: 0px 18px;
  .headerName {
    @media screen and (max-width: 640px) {
      width: max-content;
    }
    @media screen and (max-width: 450px) {
      font-size: 13px;
      padding: 1rem;
      width: max-content;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 0 3rem;
    gap: 4rem;
  }

  .nav-container {
    margin-left: 100px;
  }

  .nav-container ul {
    justify-content: center;
    align-items: center;
    display: flex;
    color: #d6e5fa;
    gap: 2rem;
    cursor: pointer;
    li {
      position: relative;
      padding: 0.3rem 0;
    }
    li::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: rgba(45, 253, 79, 1);
      transition: all 0.5s ease-out;
    }
    li:hover::after {
      width: 100%;
    }

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  .walletBtn {
    background: linear-gradient(
      0deg,
      rgba(6, 82, 15, 1) 0%,
      rgba(45, 253, 79, 1) 100%
    );

    width: 220px;
    height: 60px;
    border-radius: 20px;
    margin-top: -12px;
    margin-right: 30px;
    outline: none;
    border: none;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }

    .css-1iyoj2o {
      padding-left: 8px;
      width: 150px;
    }

    .tw-connected-wallet .walletBtn {
      width: 370px;
    }

    .tw-connected-wallet__address {
      color: yellow;
    }
  }
`;

const StyledButton = styled(Button)`
  background: rgb(6, 82, 15);
  background: linear-gradient(
    0deg,
    rgba(6, 82, 15, 1) 0%,
    rgba(45, 253, 79, 1) 100%
  );

  width: 220px;
  height: 60px;
  border-radius: 20px;
  margin-top: -12px;
  margin-right: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #000;
    text-decoration: none;
  }
`;

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 30px;
`;

function Header() {
  const transition = { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] };
  const menu = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const letter = {
    initial: {
      y: -40,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-200",
      duration: "1000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  const address = useAddress();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!address) return;
    else {
      navigate("/dashboard");
    }
  }, [address]);

  const [dashboardBtnClicked, setDashboardBtnClicked] = useState(false);

  return (
    <Main data-scroll-section>
      <div>
        <motion
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
        >
          <StyledImage src={logo} />
        </motion>
      </div>
      <div className="nav-container">
        <motion.ul variants={menu} initial="initial" animate="animate">
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: "2px",
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial="initial"
            animate="animate"
            onClick={() => handleScroll("#project")}
          >
            Goal
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: "2px",
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial="initial"
            animate="animate"
            onClick={() => handleScroll("#about")}
          >
            Be a Part
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: "2px",
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial="initial"
            animate="animate"
            onClick={() => handleScroll("#skills")}
          >
            Team
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.05,
              letterSpacing: "2px",
              transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            variants={letter}
            initial="initial"
            animate="animate"
            onClick={() => handleScroll("#footer")}
          >
            Contact Me
          </motion.li>
        </motion.ul>
      </div>

      <StyledButton onClick={() => setDashboardBtnClicked(true)} style={{ display: dashboardBtnClicked && 'none'}}>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
        >
          Dashboard <ArrowRightOutlined />
        </motion.p>
      </StyledButton>
      {dashboardBtnClicked && (
        <ConnectWallet
          theme="dark"
          btnTitle="Connect Wallet"
          className="walletBtn"
        />
      )}
    </Main>
  );
}

export default Header;
