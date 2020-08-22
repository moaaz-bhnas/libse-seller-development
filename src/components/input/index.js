import { InputContainer, StyledInputWithPrepending, Prepending } from "./style";
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

export const RadioInput = ({
  name,
  label,
  value,
  checked,
  style,
  onChange,
}) => {
  return (
    <Label style={style}>
      <StyledRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </Label>
  );
};

const Label = styled.label`
  width: 50%;
  padding: 0.2em 0;
`;

const StyledRadioInput = styled.input`
  margin: 0 0.75em 0 0;
`;
