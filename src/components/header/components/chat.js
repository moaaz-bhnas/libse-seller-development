import { memo, forwardRef } from "react";
import ChatSvg from "../../../svgs/chat";
import styled from "styled-components";
import { headerButtonStyles } from "../../button/style";

const Chat = (props, ref) => {
  return (
    <ChatContainer>
      <ChatToggler ref={ref}>
        <ChatSvg />
      </ChatToggler>
    </ChatContainer>
  );
};

// styles
const ChatContainer = styled.div``;

const ChatToggler = styled.button`
  ${headerButtonStyles}

  height: 3rem;
  padding: 0 1.05em;
  margin-right: 1em;

  &:hover,
  &:focus {
    outline-color: #fff;

    .chatSvg {
      fill: #fff;
    }
  }

  .chatSvg {
    fill: transparent;
    stroke: #fff;
    stroke-width: 30;
    width: 1.3em;

    transition: fill 0.1s;
  }
`;

export default memo(forwardRef(Chat));
