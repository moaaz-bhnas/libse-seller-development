import { memo, useContext } from "react";
import styled, { css } from "styled-components";
import { title } from "../../shared/data";
import { AuthContext } from "../../contexts/auth";
import TopBar from "./components/topBar";

const Header = () => {
  const user = useContext(AuthContext);

  return (
    <StyledHeader seller={user && user.seller}>
      <Title>{title}</Title>

      {user && user.seller && (
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
  padding-top: ${({ seller }) => (seller ? "3em" : null)};
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
