import { memo, useContext, useRef } from "react";
import styled from "styled-components";
import theme from "../../../shared/theme";
import measurements from "../../../shared/measurements";
import Logo from "../../logo";
import Chat from "./chat";
import AccountDropdown from "./accountDropdown";
import Sidebar from "./sidebar";
import { LanguageContext } from "../../../contexts/language";
import { headerButtonStyles } from "../../button/style";

const TopBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const chatButtonRef = useRef(null);

  return (
    <StyledTopBar>
      <Sidebar />
      <Logo />
      <Chat ref={chatButtonRef} />
      <AccountDropdown previousInteractiveElement={chatButtonRef} />
      <Button onClick={() => setLanguage(language === "ar" ? "en" : "ar")}>
        {language === "ar" ? "English" : "العربية "}
      </Button>
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

const Button = styled.button`
  ${headerButtonStyles}

  color: #fff;
  margin-left: 1em;
  font-weight: 500;
  height: 3rem;
  transition: 0.1s opacity;

  &:hover,
  &:focus {
    opacity: 0.6;
    outline-color: #fff;
  }
`;

export default memo(TopBar);
