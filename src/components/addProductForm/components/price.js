import { memo } from "react";
import { ButtonsContainer } from "../style";
import { InputWithPrepending } from "../../input";
import { PreviousButton } from "../../button";
import styled from "styled-components";
import { title3 } from "../../title/style";
import { rectButton } from "../../button/style";

const Information = ({ price, setPrice, onSubmit, goToPreviousStep }) => {
  return (
    <>
      <Title>Price</Title>

      <InputWithPrepending
        half
        prependingText="EGP"
        label="Price"
        placeholder="Price (e.g. 150)"
        min="1"
        value={price}
        onChange={(event) => setPrice(Number(event.target.value))}
        required
      />

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <SubmitButton type="submit" onClick={onSubmit}>
          Submit
        </SubmitButton>
      </ButtonsContainer>
    </>
  );
};

// Styles
const Title = styled.h3`
  ${title3}
`;

const SubmitButton = styled.button`
  ${rectButton}
`;

export default memo(Information);
