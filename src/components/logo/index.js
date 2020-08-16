import { memo } from "react";
import Link from "next/link";
import { title } from "../../shared/data";
import styled from "styled-components";
import fonts from "../../shared/fonts";

const Logo = ({ fontSize, color }) => {
  return (
    <Link passHref href="/">
      <LogoLink>
        <LogoText fontSize={fontSize} color={color}>
          {title}
        </LogoText>
      </LogoLink>
    </Link>
  );
};

const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0.2em 0;
  display: flex;
  align-items: center;
  margin-right: auto;

  &:hover,
  &:focus {
    outline-color: #fff;
  }
`;

const LogoText = styled.span`
  font-family: ${fonts.serif};
  font-size: ${(props) => props.fontSize || "2rem"};
  color: ${(props) => props.color || "#fff"};
`;

export default memo(Logo);
