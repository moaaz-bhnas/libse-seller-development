import { memo } from "react";
import styled from "styled-components";
import { RadioInput } from "../../input";

const RadioButtonsGroup = ({ name, items, selectedItem, onChange }) => {
  return (
    <RadioGroup>
      {items.map((item) => (
        <RadioInput
          key={item.value}
          name={name}
          label={item.label}
          value={item.value}
          checked={item.value === selectedItem}
          onChange={onChange}
        />
      ))}
    </RadioGroup>
  );
};

const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`;

export default memo(RadioButtonsGroup);
