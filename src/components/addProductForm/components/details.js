import React, { memo } from "react";
import { NextButton } from "../../button";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import RadioButtonsGroup from "./radioButtonsGroup";

const Details = ({
  details,
  selectedDetails,
  setSelectedDetails,
  onStepSubmit,
}) => {
  const disabled = Object.keys(selectedDetails).length < 2;
  return (
    <>
      <Title>Product Details</Title>

      {details.map((detail) => (
        <>
          <SubTitle>{detail.label}:</SubTitle>
          <RadioButtonsGroup
            name={detail.value}
            items={detail.options}
            selectedItem={selectedDetails[detail.value]}
            onChange={({ e }) =>
              setSelectedDetails({
                ...selectedDetails,
                [detail.value]: e.target.value,
              })
            }
            itemsPerRow={4}
          />
        </>
      ))}

      <NextButton
        disabled={disabled}
        onClick={(event) => onStepSubmit(event, disabled)}
      />
    </>
  );
};

const Title = styled.h3`
  ${title3}
`;

const SubTitle = styled.h4`
  ${title4}
  margin: 0 0 .5em;
`;

export default memo(Details);
