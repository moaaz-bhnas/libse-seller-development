import { memo } from "react";
import Header from "../header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const Main = styled.main``;

export default memo(Layout);
