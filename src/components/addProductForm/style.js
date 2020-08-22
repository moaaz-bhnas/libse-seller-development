import styled from "styled-components";
import theme from "../../shared/theme";

export const SubTitle = styled.h3`
  font-size: 1.3rem;
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: ${theme.text.warning};

  display: flex;
  align-items: center;

  &.progressbar__errMsg {
    position: absolute;
  }
`;

export const ErrorIcon = styled.img`
  width: 1em;
  margin-left: 0.5em;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 0.85em;
`;
