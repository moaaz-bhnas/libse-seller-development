import React, { memo } from "react";
import { NextButton } from "../../button";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import RadioButtonsGroup from "./radioButtonsGroup";

const categories = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Boys", value: "boys" },
  { label: "Girls", value: "girls" },
];
const subCategories = [
  { label: "Pants & Jeans", value: "pants-&-jeans" },
  { label: "T-Shirts & Polos", value: "t-shirts-&-polos" },
  { label: "Slippers", value: "slippers" },
  { label: "Formal Shoes", value: "formal-shoes" },
  { label: "Watches", value: "watches" },
  { label: "Sunglasses", value: "sunglasses" },
  { label: "Accessories", value: "accessories" },
];

const Information = ({
  category,
  setCategory,
  subCategory,
  setSubCategory,
  onStepSubmit,
}) => {
  const disabled = [category, subCategory].some((value) => value === "");

  return (
    <>
      <Title>Product Information</Title>

      <SubTitle>Category</SubTitle>
      <RadioButtonsGroup
        name="category"
        items={categories}
        selectedItem={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <SubTitle>Sub-category</SubTitle>
      <RadioButtonsGroup
        name="subcategory"
        items={subCategories}
        selectedItem={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
      />

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

export default memo(Information);
