import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Routers from "../routes/Routers";
import * as S from "./style";
const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <div className="routes__container">
        <Routers />
      </div>
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
