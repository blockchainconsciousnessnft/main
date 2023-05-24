import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import bell from "../assets/bell.png";
import Filter from "../assets/Filter.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Outlet } from "react-router-dom";
import { DashOutlined } from "@ant-design/icons";
import DashboardComponents from "./DashboardComponents/DashboardComponents";
import DashboardRoute from "./DashboardComponents/DashboardRoute";
import Extras from "./DashboardComponents/Extras";

const DashboardDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 88px;
  border-bottom: 1px solid #4a4a4a;

  .walletBtn {
    background: linear-gradient(
      0deg,
      #876445 0%,
      #2e1a08 100%
    );

    width: 280px;
    height: 60px;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;

    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }

    .css-1iyoj2o{
        padding-left: 8px;
        width: 150px;
    }

    .tw-connected-wallet .walletBtn{
        width: 370px;
    }

    .tw-connected-wallet__address{
        color: yellow;
    }
  }
`;

const LeftSide = styled.div`
  width: 400px;
`;

const RightSide = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
`;

const Text = styled.div`
  width: 100%;
  height: 24px;
  padding-left: 80px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: #876445;
`;


const NotificationDiv = styled.div`
  border: 2px solid #876445;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const FilterDiv = styled.div`
  border: 2px solid #876445;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Navbar = () => {
  return (
    <div>
      <NavbarDiv>
        <LeftSide>
          <Text>BlockChain Consciousness</Text>
        </LeftSide>
        <RightSide>
          <NotificationDiv>
            <Image src={bell} height={"25px"} width={"25px"} />
          </NotificationDiv>
          <FilterDiv>
            <Image src={Filter} height={"20px"} width={"25px"} />
          </FilterDiv>
          <ConnectWallet
            theme="dark"
            btnTitle="Connect Wallet"
            className="walletBtn"
          />
        </RightSide>
      </NavbarDiv>
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardDiv>
      <Navbar />
      <div style={{ display: 'flex', height: '90.5vh'}}>
        <DashboardComponents />
        <DashboardRoute />
        <Extras />
      </div>
      {/* <Outlet /> */}
    </DashboardDiv>
  );
};

export default Dashboard;
