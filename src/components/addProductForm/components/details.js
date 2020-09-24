import React, { memo, useState, useEffect, useCallback } from "react";
import { NextButton, PreviousButton } from "../../button";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import RadioButtonsGroup from "./radioButtonsGroup";
import { ErrorIcon, ButtonsContainer } from "../style";
import errorIcon from "../../../img/error.svg";
import theme from "../../../shared/theme";

const Details = ({
  selectedCategory,
  selectedSubCategory,
  groups,
  selectedGroup,
  setSelectedGroupIndex,
  details,
  selectedDetails,
  setSelectedDetails,
  goToPreviousStep,
  onStepSubmit,
  finished,
}) => {
  // const [errorVisible, setErrorVisible] = useState(false);
  const disabled = Object.keys(selectedDetails).length < 2;

  const handleSubmit = useCallback(
    (event) => {
      // if (Object.keys(selectedDetails).length < 2) {
      //   setErrorVisible(true);
      // }
      onStepSubmit(event, !finished);
    },
    [finished, selectedDetails]
  );

  return (
    <>
      <Breadcrumbs>
        {selectedCategory.label} / {selectedSubCategory.label} /{" "}
        {selectedGroup.label}
      </Breadcrumbs>

      <Title>Product Details</Title>

      {/* {Object.keys(selectedDetails).length < 2 && (
        <P role="alert" error={errorVisible}>
          At least <B>2</B> options must be checked.
          {errorVisible && <ErrorIcon src={errorIcon} alt="" />}
        </P>
      )} */}

      <SubTitle>Group:</SubTitle>
      <RadioButtonsGroup
        name="group"
        items={groups}
        selectedItem={selectedGroup.value}
        onChange={({ index }) => setSelectedGroupIndex(index)}
        itemsPerRow={4}
        required={true}
      />

      {details.map((detail) => (
        <React.Fragment key={detail.value}>
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
            required={detail.required}
          />
        </React.Fragment>
      ))}

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <NextButton disabled={!finished} onClick={handleSubmit} />
      </ButtonsContainer>
    </>
  );
};

const Title = styled.h3`
  ${title3}
`;

export const Breadcrumbs = styled.p`
  color: ${theme.text.grey};
`;

// const P = styled.p`
//   display: flex;
//   align-items: center;
//   color: ${({ error }) => (error ? theme.text.warning : "inherit")};
// `;

// const B = styled.b`
//   margin: 0 0.3em;
// `;

const SubTitle = styled.h4`
  ${title4}
  margin: 0 0 .5em;
`;

export default memo(Details);
