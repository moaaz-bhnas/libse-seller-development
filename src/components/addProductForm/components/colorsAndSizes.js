import { memo, useCallback, useState, useEffect } from "react";
import Select from "react-select";
import { ErrorIcon, ErrorMsg, ButtonsContainer } from "../style";
import { NextButton, PreviousButton } from "../../button";
import removeIcon from "../../../img/remove.svg";
import ImageUploader from "./imageUploader";
import { Input } from "../../input/style";
import errorIcon from "../../../img/error.svg";
import defaultIcon from "../../../img/default.svg";
import styled from "styled-components";
import { title3, title4 } from "../../title/style";
import theme from "../../../shared/theme";
import measurements from "../../../shared/measurements";
import uploadIcon from "../../../img/upload.svg";
import RadioButtonsGroup from "./radioButtonsGroup";

const sizeOptions = [
  { value: "xSmall", label: "X-small" },
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "xLarge", label: "X-large" },
];

const colorOptions = [
  { value: "black", label: "Black" },
  { value: "grey", label: "Grey" },
  { value: "white", label: "White" },
  { value: "brown", label: "Brown" },
  { value: "beige", label: "Beige" },
  { value: "red", label: "Red" },
  { value: "pink", label: "Pink" },
  { value: "orange", label: "Orange" },
  { value: "ivory", label: "Ivory" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
  { value: "multi", label: "Multi" },
];

const ColorsAndSizes = ({
  colors,
  setColors,
  onStepSubmit,
  goToPreviousStep,
  finished,
}) => {
  const [colorsNumber, setColorsNumber] = useState(colors.length);
  const [colorsNumberError, setColorsNumberError] = useState({
    visible: false,
    colorsToClear: 0,
  });
  const [colorError, setColorError] = useState({ visible: false, index: null });
  const [sizeError, setSizeError] = useState({ visible: false, index: null });
  const [imageError, setImageError] = useState({ visible: false, index: null });
  console.log(
    "colors: ",
    colors,
    "colorError: ",
    colorError,
    "sizeError: ",
    sizeError,
    "imageError: ",
    imageError
  );

  // const colorIsValid = useCallback((color) => {
  //   return color.value !== 0 && color.sizes.length > 0 && color.images.length > 0;
  // }, [])

  useEffect(
    function checkColorsStateAndSetDefaultColor() {
      const validColorIndex = colors.findIndex(
        (color) => color.value && color.sizes.length && color.images.length
      );
      const noDefaultColor = !colors.some((color) => color.default);

      if (validColorIndex !== -1 && noDefaultColor) {
        const updatedColors = colors.map((color, i) => {
          if (i === validColorIndex) {
            color.default = true;
          }
          return color;
        });
        setColors(updatedColors);
      }
    },
    [colors]
  );

  const handleColorsNumberChange = useCallback(
    ({ target: { value: newNumber } }) => {
      if (newNumber > colorsNumber) {
        addColorInputs(newNumber);
      } else if (newNumber < colorsNumber) {
        removeColorInputs(newNumber);
      }
    },
    [colors, colorsNumber]
  );

  const addColorInputs = useCallback(
    (newNumber) => {
      setColorsNumber(newNumber);
      const difference = newNumber - colors.length;
      const emptyColor = { value: "", sizes: [], images: [], default: false };
      const newColors = Array(difference).fill(emptyColor);
      setColors(colors.concat(newColors));
    },
    [colors, colorsNumber]
  );

  const removeColorInputs = useCallback(
    (newNumber) => {
      const difference = colors.length - newNumber;
      const emptyColors = colors.filter(
        (color) =>
          color.value === "" &&
          color.sizes.length === 0 &&
          color.images.length === 0
      ).length;
      const colorHasToBeCleared = difference > emptyColors;
      const unremovableColors = colorHasToBeCleared
        ? difference - emptyColors
        : 0;
      if (colorHasToBeCleared) {
        setColorsNumberError({
          visible: true,
          colorsToClear: unremovableColors,
        });
        setTimeout(function clearError() {
          setColorsNumberError({ visible: false, colorsToClear: 0 });
        }, 10000);
      }
      setColorsNumber(Number(newNumber) + Number(unremovableColors));
      let removedColors = 0;
      const newColors = colors.filter((color) => {
        if (colorIsEmpty(color) && removedColors < difference) {
          removedColors++;
          return false;
        } else {
          return true;
        }
      });
      setColors(newColors);
    },
    [colors, colorsNumber]
  );

  const colorIsEmpty = useCallback((color) => {
    return (
      color.value === "" &&
      color.sizes.length === 0 &&
      color.images.length === 0
    );
  }, []);

  const handleColorChange = useCallback(
    (selectedColor, index) => {
      if (selectedColor) setColorError({ visible: false, index: null });

      const updatedColors = colors.map((color, i) => {
        if (i === index) {
          color.value = selectedColor.value;
        }
        return color;
      });
      setColors(updatedColors);
    },
    [colors]
  );

  const handleSizeChange = useCallback(
    (selectedSizes, index) => {
      if (selectedSizes) {
        setSizeError({ visible: false, index: null });
      } else {
        selectedSizes = [];
      }

      const updatedColors = colors.map((color, i) => {
        if (i === index) {
          color.sizes = selectedSizes;
        }
        return color;
      });
      setColors(updatedColors);
    },
    [colors]
  );

  const removeColor = useCallback(
    (event, index) => {
      event.preventDefault();
      if (colorsNumberError.visible)
        setColorsNumberError({ visible: false, colorsToClear: 0 });

      const isLastColor = colors.length === 1;
      const updatedColors = isLastColor
        ? [{ value: "", sizes: [], images: [], default: false }]
        : colors.filter((color, i) => i !== index);
      setColors(updatedColors);

      if (!isLastColor) {
        setColorsNumber(colorsNumber - 1);
      }
    },
    [colors, colorsNumber]
  );

  const handleImageChange = useCallback(
    (imageFiles, imageDataURLs, index) => {
      console.log(
        "handleImageChange",
        "imageError.visible: ",
        imageError.visible
      );
      if (imageError.visible) setImageError({ visible: false, index: null });

      const images = imageFiles
        ? imageFiles.map((file, index) => {
            return { file, dataURL: imageDataURLs[index] };
          })
        : [];

      const updatedColors = colors.map((color, i) => {
        if (i === index) {
          color.images = images;
        }
        return color;
      });
      setColors(updatedColors);
    },
    [colors, imageError.visible]
  );

  const crossIconVisible = useCallback(
    (index) => {
      const color = colors[index];
      return color.value || color.sizes.length > 0 || color.images.length > 0;
    },
    [colors]
  );

  const handleSubmit = useCallback(
    (event) => {
      onStepSubmit(event, !finished);

      colors.forEach((color, index) => {
        if (color.value === "") {
          setColorError({ visible: true, index });
        } else if (color.sizes.length === 0) {
          setSizeError({ visible: true, index });
        } else if (color.images.length === 0) {
          setImageError({ visible: true, index });
        }
      });
    },
    [finished, colors, colorError, sizeError, imageError]
  );

  const setDefaultColor = useCallback(
    (index) => {
      const updatedColors = colors.map((color, i) => {
        color.default = i === index;
        return color;
      });
      setColors(updatedColors);
    },
    [colors]
  );

  console.log("colors: ", colors);
  return (
    <>
      <Title>Colors & Sizes</Title>

      <ColorsNumber>
        <Label htmlFor="productForm__colorsNumber">Number of colors: </Label>
        <Input
          data-tiny="true"
          id="productForm__colorsNumber"
          type="number"
          value={colorsNumber}
          onChange={handleColorsNumberChange}
          required
          min="1"
          max="10"
        />
      </ColorsNumber>
      {colorsNumberError.visible && (
        <ErrorMsg role="alert">
          You must clear {colorsNumberError.colorsToClear} of the filled colors
          <ErrorIcon src={errorIcon} alt="" />
        </ErrorMsg>
      )}

      <ColorsContainer>
        {colors.map((color, index) => {
          return (
            <InputContainer
              key={index}
              data-default-styles={color.default && colors.length >= 2}
            >
              <LabelContainer>
                <SubTitle>Color #{index + 1}</SubTitle>
                {colors.length >= 2 &&
                  (color.default ? (
                    <DefaultBadge>
                      <DefaultIcon src={defaultIcon} alt="" />
                      Default
                    </DefaultBadge>
                  ) : (
                    <DefaultButton onClick={() => setDefaultColor(index)}>
                      Set as default
                    </DefaultButton>
                  ))}
                {crossIconVisible(index) && (
                  <RemoveButton
                    type="button"
                    onClick={(event) => removeColor(event, index)}
                  >
                    <RemoveIcon src={removeIcon} alt="remove color" />
                  </RemoveButton>
                )}
              </LabelContainer>
              <Select
                className="productForm__colorSelect"
                classNamePrefix="productForm__colorSelectChild"
                value={
                  color.value
                    ? {
                        value: color.value,
                        label:
                          color.value[0].toUpperCase() + color.value.slice(1),
                      }
                    : ""
                }
                options={colorOptions}
                isSearchable
                placeholder="Color"
                onChange={(selectedColor) =>
                  handleColorChange(selectedColor, index)
                }
              />
              {colorError.visible && colorError.index === index && (
                <ErrorMsg className="inputContainer__errMsg" role="alert">
                  Please choose a color
                  <ErrorIcon src={errorIcon} alt="" />
                </ErrorMsg>
              )}

              <Select
                className="productForm__sizeSelect"
                classNamePrefix="productForm__sizeSelectChild"
                value={color.sizes}
                options={sizeOptions}
                isMulti
                isSearchable
                placeholder="Available sizes"
                onChange={(selectedSizes) =>
                  handleSizeChange(selectedSizes, index)
                }
              />
              {sizeError.visible && sizeError.index === index && (
                <ErrorMsg className="inputContainer__errMsg" role="alert">
                  Please choose at least one size
                  <ErrorIcon src={errorIcon} alt="" />
                </ErrorMsg>
              )}

              <ImageUploader
                className="productForm__imageUploader"
                buttonClassName="productForm__imageUploaderButton"
                pictures={color.images.map((image) => image.dataURL)}
                files={color.images.map((image) => image.file)}
                onChange={(imageFiles, imageDataURLs) =>
                  handleImageChange(imageFiles, imageDataURLs, index)
                }
                imgExtension={[".jpg", ".png", ".jpeg"]}
                withPreview={true}
                label="Max file size: 5mb, accepted: jpg|png"
                withIcon={false}
                buttonText="Choose image"
              />
              {imageError.visible && imageError.index === index && (
                <ErrorMsg className="inputContainer__errMsg" role="alert">
                  Please choose at least one image
                  <ErrorIcon src={errorIcon} alt="" />
                </ErrorMsg>
              )}
            </InputContainer>
          );
        })}
      </ColorsContainer>

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <NextButton
          disabled={!finished}
          onClick={handleSubmit}
          positionedAbsolutely={colors.length === 1}
        />
      </ButtonsContainer>
    </>
  );
};

// styles
const Title = styled.h3`
  ${title3}
`;

const SubTitle = styled.h4`
  ${title4}
  margin: 0;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InputContainer = styled.div`
  position: relative;
  flex: 0 1 25em;

  .inputContainer__errMsg {
    margin: -0.2em 0 0.65em;
  }

  .productForm__sizeSelect,
  .productForm__colorSelect {
    margin-bottom: 0.65em;
  }

  .productForm__sizeSelectChild__control,
  .productForm__colorSelectChild__control {
    border: 1px solid ${theme.border.grey};
    border-radius: ${measurements.borderRadius.input};
  }

  .productForm__imageUploader {
    margin-bottom: 1.25em;

    .fileContainer {
      box-shadow: none;
      border: 1px solid ${theme.border.grey};
      border-radius: ${measurements.borderRadius.input};
    }

    .deleteImage {
      background-color: ${theme.bg.accent};
    }
  }

  .productForm__imageUploaderButton {
    background-color: ${theme.bg.accent};
    transition-property: box-shadow, background-color;
    transition-duration: 0.15s;
    border-radius: ${measurements.borderRadius.input};
    display: flex;
    align-items: center;

    &:hover {
      background-color: #c2715f;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(215, 126, 106, 0.5);
    }

    &::after {
      content: url(${uploadIcon});
      width: 1em;
      display: inline-block;
      margin-left: 0.75em;
    }
  }

  .productForm__colorSelectChild__placeholder {
    color: #686868;
  }
`;

const ColorsNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const LabelContainer = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label``;

const RemoveButton = styled.button`
  background-color: transparent;
  width: 3em;
  border: none;
  padding: 0.9em;
  margin: 0 -0.9em 0 0.5em;

  &:hover {
    opacity: 0.6;
  }
`;

const RemoveIcon = styled.img`
  width: 100%;
`;

const DefaultButton = styled.button`
  margin-left: auto;
`;

const DefaultBadge = styled.p`
  margin: 0 0 0 auto;
  color: ${theme.text.success};

  display: flex;
  align-items: center;
  font-weight: 500;
`;

const DefaultIcon = styled.img`
  width: 1em;
  margin-right: 0.25em;
`;

export default memo(ColorsAndSizes);
