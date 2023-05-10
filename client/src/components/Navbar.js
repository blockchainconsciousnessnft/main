import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";
import { styled } from "styled-components";
import { Button, Image } from "antd";
import { motion } from "framer-motion";

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const StyledLink = styled(Link)`
`;

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;

const StyledList = styled.ul`
 
  display: flex;
  list-style-type: none;
  text-decoration-line: none;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const StyledListItem = styled.li`
  font-size: 24px;
  font-family: system-ui;
  font-weight: bold;
  a{
    text-decoration: none;
    color: black;
  }
`;

const ButtonDiv = styled.div`
  padding-right: 40px;
`

const StyledButton = styled(Button)`
  background-color: green;
  font-size: 18px;
  height: 60px;
  font-weight: bold;
  padding: 10px;
  border: 1px solid black;

  &:hover{
    color: black !important;
  }
`

const Navbar = () => {
  const [active, setActive] = useState("");

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
      <NavbarDiv>
        <StyledLink
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <StyledImage src={logo} />
        </StyledLink>
        <StyledList>
          {navLinks.map((link) => {
            return (
              <StyledListItem
                key={link.id}
                onClick={() => setActive(link.title)}
                style={{
                  marginRight: "30px",
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </StyledListItem>
            );
          })}
        </StyledList>
        <ButtonDiv>
          <StyledButton>Connect Wallet to Login</StyledButton>
        </ButtonDiv>
      </NavbarDiv>
    </motion.div>
  );
};

export default Navbar;
