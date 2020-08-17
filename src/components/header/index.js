import { memo, useContext } from "react";
import styled, { css } from "styled-components";
import { title } from "../../shared/data";
import { AuthContext } from "../../contexts/auth";
import TopBar from "./components/topBar";

const Header = () => {
  const user = useContext(AuthContext);

  return (
    <StyledHeader>
      <Title>{title}</Title>

      {user && (
        <Navigation>
          <NavigationTitle>Navigation</NavigationTitle>
          <TopBar />
        </Navigation>
      )}
    </StyledHeader>
  );
};

// Styles
const unvisible = css`
  position: absolute;
  left: -100rem;
`;

const StyledHeader = styled.header`
  margin-bottom: 2em;
  padding-top: 3em;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  ${unvisible}
`;

const Navigation = styled.nav``;

const NavigationTitle = styled.h2`
  ${unvisible}
`;

export default memo(Header);
