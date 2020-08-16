import { memo, useRef } from "react";
import styled from "styled-components";
import theme from "../../../shared/theme";
import measurements from "../../../shared/measurements";
import Logo from "../../logo";
import Chat from "./chat";
import AccountDropdown from "./accountDropdown";

const TopBar = () => {
  const chatButtonRef = useRef(null);

  return (
    <StyledTopBar>
      <Logo />
      <Chat ref={chatButtonRef} />
      <AccountDropdown previousInteractiveElement={chatButtonRef} />
    </StyledTopBar>
  );
};

// Styles
const StyledTopBar = styled.div`
  background-color: ${theme.bg.secondary};
  height: ${measurements.height.sellerHeader};
  display: flex;
  padding: 0 1.05em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default memo(TopBar);
