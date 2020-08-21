import {
  InputContainer,
  StyledInputWithPrepending,
  Prepending,
  StyledRadioInput,
} from "./style";
import styled from "styled-components";

export const InputWithPrepending = ({
  prependingText,
  label,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <InputContainer>
      <Prepending>{prependingText}</Prepending>
      <StyledInputWithPrepending
        type="number"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
};

export const RadioInput = ({ name, label, value, checked, style }) => {
  return (
    <Label>
      <StyledRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        style={style}
      />
      {label}
    </Label>
  );
};

const Label = styled.label``;
