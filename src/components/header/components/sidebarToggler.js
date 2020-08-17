import { memo } from "react";
import hamburgerIcon from "../../../img/menu.svg";
import styled from "styled-components";
import { headerButtonStyles } from "../../button/style";

const SidebarToggler = ({ onClick }) => {
  return (
    <StyledSidebarToggler
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <HamburgerIcon
        className="sidebar__hamburgerIcon"
        src={hamburgerIcon}
        alt="Toggle sidebar"
      />
    </StyledSidebarToggler>
  );
};

export const StyledSidebarToggler = styled.button`
  ${headerButtonStyles}
  height: 3rem;
  padding: 0 1em;
  margin-right: 0.5em;
  margin-left: -1.05em;

  &:hover,
  &:focus {
    .sidebar__hamburgerIcon {
      opacity: 0.6;
    }
  }

  &:focus {
    outline-color: #fff;
  }
`;

export const HamburgerIcon = styled.img`
  width: 1.2em;
  transition: opacity 0.1s;
`;

export default memo(SidebarToggler);
