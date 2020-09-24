import React, { memo } from "react";
import { NextButton } from "../../button";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import RadioButtonsGroup from "./radioButtonsGroup";

const Information = ({
  categories,
  subCategories,
  selectedCategory,
  setSelectedCategoryIndex,
  selectedSubCategory,
  setSelectedSubCategoryIndex,
  onStepSubmit,
}) => {
  return (
    <>
      <Title>Product Category</Title>

      <SubTitle>Category:</SubTitle>
      <RadioButtonsGroup
        name="category"
        items={categories}
        selectedItem={selectedCategory}
        onChange={({ index }) => setSelectedCategoryIndex(index)}
      />

      <SubTitle>Sub-category:</SubTitle>
      <RadioButtonsGroup
        name="subcategory"
        items={subCategories}
        selectedItem={selectedSubCategory}
        onChange={({ index }) => setSelectedSubCategoryIndex(index)}
      />

      <NextButton onClick={(event) => onStepSubmit(event)} />
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

export default memo(Information);
