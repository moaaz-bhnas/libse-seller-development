import { memo, useContext } from "react";
import Header from "../header";
import styled from "styled-components";
import { LayoutContext } from "../../contexts/layout";
import measurements from "../../shared/measurements";
import time from "../../shared/time";
import { AuthContext } from "../../contexts/auth";

const Layout = ({ children }) => {
  const user = useContext(AuthContext);
  const { sidebarExpanded } = useContext(LayoutContext);

  return (
    <>
      <Header />

      <Main>
        <Wrapper seller={user && user.seller} sidebarExpanded={sidebarExpanded}>
          {children}
        </Wrapper>
      </Main>
    </>
  );
};

const Wrapper = styled.div`
  max-width: ${({ seller }) =>
    seller
      ? measurements.maxWidth.wrapper
      : measurements.maxWidth.smallWrapper};
  margin: 0 auto;
  padding-left: ${({ seller, sidebarExpanded }) =>
    seller
      ? sidebarExpanded
        ? measurements.width.sidebar
        : measurements.width.sidebarCollapsed
      : null};
  transition: padding-left ${time.transition.sidebar}s;
`;

const Main = styled.main``;

export default memo(Layout);
