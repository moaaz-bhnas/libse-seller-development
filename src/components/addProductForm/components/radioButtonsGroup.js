import { memo, useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../../contexts/language";
import { RadioInput } from "../../input";
import formatValue from "../../../utils/formatValue";

const RadioButtonsGroup = ({
  name,
  items,
  selectedItem,
  onChange,
  itemsPerRow = 2,
  required = false,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <RadioGroup>
      {items.map((item, index) => {
        const label = item[`name_${language}`];
        const value = formatValue(label);

        return (
          <RadioInput
            key={index}
            name={name}
            label={label}
            value={value}
            checked={label === selectedItem}
            onChange={(e) => onChange({ e, index })}
            width={100 / itemsPerRow}
            required={required}
          />
        );
      })}
    </RadioGroup>
  );
};

const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`;

export default memo(RadioButtonsGroup);
