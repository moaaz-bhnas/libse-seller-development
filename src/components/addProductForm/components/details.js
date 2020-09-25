import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { NextButton, PreviousButton } from "../../button";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import RadioButtonsGroup from "./radioButtonsGroup";
import { ErrorIcon, ButtonsContainer } from "../style";
import errorIcon from "../../../img/error.svg";
import theme from "../../../shared/theme";
import { LanguageContext } from "../../../contexts/language";

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
  const { language } = useContext(LanguageContext);

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
        {selectedCategory[`name_${language}`] + " "} /{" "}
        {selectedSubCategory[`name_${language}`] + " "} /{" "}
        {selectedGroup[`name_${language}`]}
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
        selectedItem={selectedGroup[`name_${language}`]}
        onChange={({ index }) => setSelectedGroupIndex(index)}
        itemsPerRow={4}
        required={true}
      />

      {details.map((detail, detailIndex) => (
        <React.Fragment key={detailIndex}>
          <SubTitle>{detail[`name_${language}`]}:</SubTitle>
          <RadioButtonsGroup
            name={detail[`name_${language}`]}
            items={detail.options}
            selectedItem={selectedDetails[detailIndex][`value_${language}`]}
            onChange={({ index: optionIndex }) => {
              const option = detail.options[optionIndex];

              const selectedDetailsCopy = selectedDetails.slice();
              selectedDetailsCopy[detailIndex].value_ar = option.name_ar;
              selectedDetailsCopy[detailIndex].value_en = option.name_en;

              setSelectedDetails(selectedDetailsCopy);
            }}
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
