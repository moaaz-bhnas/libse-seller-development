import { memo, useContext } from "react";
import Header from "../header";
import styled from "styled-components";
import { LayoutContext } from "../../contexts/layout";
import measurements from "../../shared/measurements";
import time from "../../shared/time";

const Layout = ({ children }) => {
  const { sidebarExpanded } = useContext(LayoutContext);

  return (
    <>
      <Header />

      <Main>
        <Wrapper sidebarExpanded={sidebarExpanded}>{children}</Wrapper>
      </Main>
    </>
  );
};

const Wrapper = styled.div`
  max-width: ${measurements.maxWidth.wrapper};
  margin: 0 auto;
  padding-left: ${({ sidebarExpanded }) =>
    sidebarExpanded
      ? measurements.width.sidebar
      : measurements.width.sidebarCollapsed};
  transition: padding-left ${time.transition.sidebar}s;
`;

const Main = styled.main``;

export default memo(Layout);
