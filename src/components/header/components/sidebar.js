import { memo, useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutContext } from "../../../contexts/layout";
import SidebarToggler from "./sidebarToggler";
import SvgDashboard from "../../../svgs/dashboard";
import SvgProducts from "../../../svgs/products";
import SvgSponsored from "../../../svgs/sponsored";
import rightArrow from "../../../img/right-arrow.svg";
import theme from "../../../shared/theme";
import { listStyles } from "../../list/style";
import measurements from "../../../shared/measurements";
import styled, { keyframes } from "styled-components";
import time from "../../../shared/time";

const items = [
  { value: "dashboard", Icon: SvgDashboard },
  { value: "products", Icon: SvgProducts },
  { value: "sponsored products", Icon: SvgSponsored },
];

const Item = ({ itemObject, expanded }) => {
  const [contentVisible, setContentVisible] = useState(expanded);
  useEffect(
    function delayShowingContent() {
      if (expanded) {
        setTimeout(() => {
          setContentVisible(true);
        }, 150);
      } else {
        setContentVisible(false);
      }
    },
    [expanded]
  );

  const { value, Icon } = itemObject;
  const href = value === "dashboard" ? "/" : `/${value.split(" ").join("-")}`;

  const { pathname } = useRouter();
  const active = pathname === href;

  return (
    <StyledItem>
      <Link href={href} passHref>
        <StyledLink
          className={`sellerSidebar__${value.split(" ")[0]}Link`}
          data-active={active}
          onMouseDown={(e) => e.preventDefault()}
          aria-label={value}
        >
          <Icon />
          {contentVisible && <LinkText>{value}</LinkText>}
          {contentVisible && !active && <RightArrow src={rightArrow} alt="" />}
        </StyledLink>
      </Link>
    </StyledItem>
  );
};

const Sidebar = () => {
  const {
    sidebarExpanded: expanded,
    setSidebarExpanded: setExpanded,
  } = useContext(LayoutContext);

  return (
    <StyledSidebar>
      <SidebarToggler onClick={() => setExpanded(!expanded)} />

      <List expanded={expanded}>
        {items.map((item, index) => (
          <Item key={item.value} itemObject={item} expanded={expanded} />
        ))}
      </List>
    </StyledSidebar>
  );
};

// styles
const StyledSidebar = styled.div``;

const List = styled.ul`
  ${listStyles}

  position: fixed;
  top: ${measurements.height.sellerHeader};
  left: 0;
  bottom: 0;
  width: ${({ expanded }) =>
    expanded
      ? measurements.width.sidebar
      : measurements.width.sidebarCollapsed};
  background-color: ${theme.bg.secondary};
  border-top: 1px solid ${theme.border.shuttleGrey};
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.15);

  transition: width ${time.transition.sidebar}s;
`;

const StyledItem = styled.li`
  &:last-child {
    border-bottom: 5px solid ${theme.border.shuttleGrey};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.text.manatee};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.border.shuttleGrey};
  transition-property: color, background-color;
  transition-duration: 0.1s;
  position: relative;

  .svg {
    width: 3.3em;
    padding: 1em;
    fill: ${theme.bg.manatee};
    transition: fill 0.1s;
  }

  &:hover,
  &:focus,
  &[data-active="true"] {
    color: #fff;

    .dashboardSvg {
      fill: #008cff;
    }

    .productsSvg {
      fill: #fed02f;
    }

    .sponsoredSvg {
      fill: #1fc876;
    }
  }

  &:hover,
  &:focus {
    background-color: ${theme.bg.tuna};
    outline-color: #fff;
  }

  &[data-active="true"] {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 5px;
    }

    &.sellerSidebar__dashboardLink::after {
      background-color: #008cff;
    }

    &.sellerSidebar__productsLink::after {
      background-color: #fed02f;
    }

    &.sellerSidebar__sponsoredLink::after {
      background-color: #1fc876;
    }
  }
`;

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const LinkText = styled.span`
  margin-right: auto;

  animation: ${show} 0.1s both;
`;

const RightArrow = styled.img`
  width: 0.75em;
  margin-right: 1em;

  animation: ${show} 0.3s both;
`;

export default memo(Sidebar);
