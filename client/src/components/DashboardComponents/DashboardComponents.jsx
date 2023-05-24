import React, { useState } from "react";
import { dashboardRoutes } from "../../App";
import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";

const StyledDashboardroutescontainer = styled.div`
  width: 16vw;
  height: 92vh;
`;

const StyledListContainer = styled.ul``;

const StyledList = styled.li``;

const RouteName = styled.div`
  width: 100%;
  height: 40px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 32px 40px 32px 96px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 24px;
  border-radius: 8px;
  color: #af9883;
  cursor: pointer;
`;

const DashboardComponents = () => {
  return (
    <StyledDashboardroutescontainer>
      <StyledListContainer>
        {dashboardRoutes.map((route) => {
          return (
            <StyledList key={route.id}>
              <Link to={`/dashboard/${route.routeName}`}>
                <RouteName
                  onClick={() => console.log("route name", route.routeName)}
                >
                  {route.routeName}
                </RouteName>
              </Link>
            </StyledList>
          );
        })}
      </StyledListContainer>
    </StyledDashboardroutescontainer>
  );
};

export default DashboardComponents;
