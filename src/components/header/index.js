import { useContext } from "react";
import styled, { css } from "styled-components";
import { title } from "../../shared/data";
import { AuthContext } from "../../contexts/auth";
import TopBar from "./components/topBar";
import { SellerContext } from "../../contexts/seller";
import withLocale from "../../hocs/withLocale";

const Header = () => {
  const user = useContext(AuthContext);
  const { isSeller } = useContext(SellerContext);

  return (
    <StyledHeader seller={user && isSeller}>
      <Title>{title}</Title>

      {user && isSeller && (
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

export default withLocale(Header);
