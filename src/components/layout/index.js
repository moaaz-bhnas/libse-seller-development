import { memo, useContext } from "react";
import Header from "../header";
import styled from "styled-components";
import { LayoutContext } from "../../contexts/layout";
import measurements from "../../shared/measurements";

const Layout = ({ children }) => {
  const { sidebarExpanded } = useContext(LayoutContext);

  return (
    <>
      <Header />
      <Wrapper sidebarExpanded={sidebarExpanded}>
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-left: ${({ sidebarExpanded }) =>
    sidebarExpanded
      ? measurements.width.sidebar
      : measurements.width.sidebarCollapsed};
  transition: 0.3s padding-left;
`;

const Main = styled.main``;

export default memo(Layout);
