import { memo, useCallback, useState, useEffect } from "react";
import { ErrorMsg, ErrorIcon } from "../style";
import CategorySvg from "../../../svgs/category";
import DetailsSvg from "../../../svgs/details";
import ColorsSvg from "../../../svgs/colors";
import PriceSvg from "../../../svgs/price";
import errorIcon from "../../../img/error.svg";
import time from "../../../shared/time";
import styled from "styled-components";
import theme from "../../../shared/theme";

const steps = [
  { text: "category", Icon: CategorySvg },
  { text: "details", Icon: DetailsSvg },
  { text: "colors\u00A0&\u00A0sizes", Icon: ColorsSvg },
  { text: "price", Icon: PriceSvg },
];

const ProgressBar = ({ activeStep, setActiveStep, finishedStep }) => {
  const [error, setError] = useState(false);

  const handleStepClick = useCallback(
    (event, step) => {
      console.log("handleStepClick");
      console.log("step: ", step, "finishedStep: ", finishedStep);
      console.log(step - finishedStep <= 1);
      event.preventDefault();

      if (step - finishedStep <= 1) {
        setActiveStep(step);
      } else {
        setError(true);
      }
    },
    [finishedStep]
  );

  useEffect(() => {
    if (error) {
      setTimeout(function hideErrorMsg() {
        setError(false);
      }, time.delay.errorMsg);
    }
  }, [error]);

  return (
    <ProgressBarContainer>
      <StyledProgressBar>
        {steps.map(({ text, Icon }, index) => (
          <Step key={text} data-opened={activeStep >= index + 1}>
            <StepIconButton
              type="button"
              onClick={(event) => handleStepClick(event, index + 1)}
              className="progressbar__iconContainer"
              onMouseDown={(event) => event.preventDefault()}
            >
              <Icon />
            </StepIconButton>
            <StepText>{text}</StepText>
          </Step>
        ))}
      </StyledProgressBar>

      {error && (
        <ErrorMsg className="progressbar__errMsg" role="alert">
          You have to finish this step first
          <ErrorIcon src={errorIcon} alt="" />
        </ErrorMsg>
      )}
    </ProgressBarContainer>
  );
};

// styles
export const ProgressBarContainer = styled.div`
  width: 36em;
  margin-bottom: 2.5em;
`;

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Step = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    .progressbar__iconContainer::after {
      display: none;
    }
  }

  &[data-opened="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.darkGrey};
      background-color: ${theme.bg.darkGrey};
    }

    .svg {
      fill: #fff;
    }
  }
`;

const borderColor = "#afaead";

export const StepIconButton = styled.button`
  width: 3em;
  height: 3em;
  padding: 0.6em;
  border-radius: 50%;
  background-color: #f0f0ef;
  border: 2px solid ${borderColor};
  position: relative;
  transition-property: border-color, background-color;
  transition-duration: 0.2s;

  .svg {
    width: 100%;
    fill: #646463;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 10em;
    height: 2px;
    background-color: ${borderColor};
    top: 50%;
    left: 2.5em;
    transform: translate(0, -50%);
    transition: background-color 0.2s;
  }
`;

export const StepText = styled.p`
  text-transform: capitalize;
`;

export default memo(ProgressBar);
