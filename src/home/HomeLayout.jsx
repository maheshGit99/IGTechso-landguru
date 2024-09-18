import React from "react";

import { styled } from "@mui/material/styles";

import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const Main = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Main>
        <Header />
        <Outlet />
        <Footer />
      </Main>
    </React.Fragment>
  );
};

export default HomeLayout;
