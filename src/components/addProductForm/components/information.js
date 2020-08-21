import React, { memo } from "react";
import { DataList, Option } from "../style";
import { Input, TextArea } from "../../input/style";
import { NextButton } from "../../button";
import styled, { css } from "styled-components";
import { title3, title4 } from "../../title/style";
import { RadioInput } from "../../input";

const categories = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Boys", value: "boys" },
  { label: "Girls", value: "girls" },
];
const subCategories = [
  "Pants & Jeans",
  "T-Shirts & Polos",
  "Slippers",
  "Formal Shoes",
  "Watches",
  "Sunglasses",
  "Accessories",
];

const Information = ({
  productName,
  setProductName,
  category,
  setCategory,
  subCategory,
  setSubCategory,
  description,
  setDescription,
  onStepSubmit,
}) => {
  const disabled = [productName, category, subCategory, description].some(
    (value) => value === ""
  );

  return (
    <>
      <Title>Product Information</Title>

      <SubTitle>Category</SubTitle>
      <RadioGroup>
        {categories.map((item) => (
          <RadioInput
            key={item.value}
            name="category"
            label={item.label}
            value={item.value}
            checked={item.value === category}
            style={radioInputStyles}
          />
        ))}
      </RadioGroup>
      {/* <Input
        type="text"
        aria-label="Choose category"
        placeholder="Choose category (e.g. men)"
        list="productForm__categories"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />
      <DataList id="productForm__categories">
        {categories.map((category) => (
          <Option key={category} value={category} />
        ))}
      </DataList> */}

      <Input
        type="text"
        aria-label="Choose sub category"
        placeholder="Choose sub-category (e.g. Pants & Jeans)"
        list="productForm__subCategories"
        value={subCategory}
        onChange={(event) => setSubCategory(event.target.value)}
        required
      />
      <DataList id="productForm__subCategories">
        {subCategories.map((subCategory) => (
          <Option key={subCategory} value={subCategory} />
        ))}
      </DataList>

      <TextArea
        aria-label="Short description"
        placeholder="Write a short description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows="6"
        maxLength="100"
        required
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
`;

const RadioGroup = styled.div``;

const radioInputStyles = {};

export default memo(Information);
