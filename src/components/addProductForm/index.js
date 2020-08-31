import { memo, useState, useCallback, useContext, useEffect } from "react";
import Category from "./components/category";
import Details from "./components/details";
import ProgressBar from "./components/ProgressBar";
import ColorsAndSizes from "./components/colorsAndSizes";
import Price from "./components/price";
import { AuthContext } from "../../contexts/auth";
import { addProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { title } from "../title/style";

const categories = [
  {
    label: "Men",
    value: "men",
    subCategories: [
      {
        label: "Pants",
        value: "pants",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Jeans", value: "jeans" },
              { label: "Trousers", value: "trousers" },
              { label: "Joggers", value: "joggers" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort Fit", value: "comfort-fit" },
              { label: "Slim Fit", value: "slim-fit" },
              { label: "Skinny", value: "skinny" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
      {
        label: "Slippers",
        value: "slippers",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Arabic", value: "arabic" },
              { label: "Flip Flop", value: "flip-flop" },
              { label: "Slides", value: "slides" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Women",
    value: "women",
    subCategories: [
      {
        label: "Dresses",
        value: "dresses",
        details: [
          {
            label: "Length",
            value: "length",
            options: [
              { label: "Above The Knee", value: "above-the-knee" },
              { label: "Knee Length", value: "knee-length" },
              { label: "Maxi", value: "maxi" },
              { label: "Mid Calf", value: "mid-calf" },
              { label: "Mini", value: "mini" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Straight", value: "straight" },
              { label: "Shift", value: "shift" },
              { label: "Bodycon", value: "bodycon" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Half", value: "half" },
              { label: "Short", value: "short" },
              { label: "Single", value: "single" },
              { label: "Sleeveless", value: "sleeveless" },
              { label: "Three Quarter Sleeve", value: "three-quarter-sleeve" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Club", value: "club" },
              { label: "Cocktail", value: "cocktail" },
              { label: "Special Occasion", value: "special-occasion" },
            ],
          },
        ],
      },
      {
        label: "Sandals",
        value: "sandals",
        details: [
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort", value: "comfort" },
              { label: "Heels", value: "heels" },
              { label: "Wedges", value: "wedges" },
              { label: "Hells", value: "hells" },
              { label: "Clog", value: "clog" },
              { label: "Thong", value: "thong" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Dress", value: "dress" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Boys",
    value: "boys",
    subCategories: [
      {
        label: "Pants",
        value: "pants",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Jeans", value: "jeans" },
              { label: "Trousers", value: "trousers" },
              { label: "Joggers", value: "joggers" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort Fit", value: "comfort-fit" },
              { label: "Slim Fit", value: "slim-fit" },
              { label: "Skinny", value: "skinny" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Girls",
    value: "girls",
    subCategories: [
      {
        label: "Dresses",
        value: "dresses",
        details: [
          {
            label: "Length",
            value: "length",
            options: [
              { label: "Above The Knee", value: "above-the-knee" },
              { label: "Knee Length", value: "knee-length" },
              { label: "Maxi", value: "maxi" },
              { label: "Mid Calf", value: "mid-calf" },
              { label: "Mini", value: "mini" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Straight", value: "straight" },
              { label: "Shift", value: "shift" },
              { label: "Bodycon", value: "bodycon" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Half", value: "half" },
              { label: "Short", value: "short" },
              { label: "Single", value: "single" },
              { label: "Sleeveless", value: "sleeveless" },
              { label: "Three Quarter Sleeve", value: "three-quarter-sleeve" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Club", value: "club" },
              { label: "Cocktail", value: "cocktail" },
              { label: "Special Occasion", value: "special-occasion" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
    ],
  },
];

const AddProductForm = () => {
  const user = useContext(AuthContext);
  const sellerId = user && user.uid;
  const dispatch = useDispatch();
  const router = useRouter();

  // Inputs
  const [productName, setProductName] = useState("Product Name");

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedSubCategoryIndex, setSelectedSubCategoryIndex] = useState(0);
  const subCategories = categories[selectedCategoryIndex].subCategories;
  const selectedCategory = categories[selectedCategoryIndex];
  const selectedSubCategory =
    selectedCategory.subCategories[selectedSubCategoryIndex];

  const [selectedDetails, setSelectedDetails] = useState({});
  const { details } = selectedSubCategory;
  useEffect(() => {
    setSelectedDetails({});
  }, [selectedSubCategoryIndex]); // re-render

  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([
    { value: "", sizes: [], images: [], default: false },
  ]);
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  useEffect(() => {
    setSelectedSubCategoryIndex(0);
  }, [selectedCategoryIndex]);

  // Active step
  const [activeStep, setActiveStep] = useState(1);
  console.log("activeStep: ", activeStep);

  const handleStepSubmit = useCallback(
    (event, disabled = false) => {
      console.log("handleStepSubmit");
      console.log("disabled: ", disabled);
      if (!disabled) {
        event.preventDefault();
        setActiveStep(activeStep + 1);
      }
    },
    [activeStep]
  );

  const goToPreviousStep = useCallback(() => {
    console.log("goToPreviousStep");
    setActiveStep(activeStep - 1);
  }, [activeStep]);

  const finishedStep3 = colors.every(
    (color) => color.value && color.sizes.length && color.images.length
  );
  const finishedStep4 = price;

  const finishedStep = finishedStep4 ? 4 : finishedStep3 ? 3 : 2;

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (finishedStep !== 3) return;

      const product = {
        productName,
        category: categories[selectedCategoryIndex].value,
        subCategory:
          categories[selectedCategoryIndex].subCategories[
            selectedSubCategoryIndex
          ].value,
        description,
        colors,
        price,
      };
      console.log("product: ", product);
      dispatch(addProduct(sellerId, product, router));
    },
    [
      finishedStep,
      productName,
      selectedCategoryIndex,
      selectedSubCategoryIndex,
      description,
      colors,
      price,
    ]
  );

  return (
    <Form onSubmit={handleFormSubmit}>
      <Title>Add Product</Title>

      <ProgressBar
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        finishedStep={finishedStep}
      />

      <FormContainer
        size={activeStep === 2 ? "md" : activeStep === 3 ? "lg" : "sm"}
      >
        {activeStep === 1 ? (
          <Category
            categories={categories}
            subCategories={subCategories}
            selectedCategory={selectedCategory.value}
            setSelectedCategoryIndex={setSelectedCategoryIndex}
            selectedSubCategory={
              selectedSubCategory && selectedSubCategory.value
            }
            setSelectedSubCategoryIndex={setSelectedSubCategoryIndex}
            onStepSubmit={handleStepSubmit}
          />
        ) : activeStep === 2 ? (
          <Details
            details={details}
            selectedDetails={selectedDetails}
            setSelectedDetails={setSelectedDetails}
            onStepSubmit={handleStepSubmit}
          />
        ) : activeStep === 3 ? (
          <ColorsAndSizes
            colors={colors}
            setColors={setColors}
            onStepSubmit={handleStepSubmit}
            goToPreviousStep={goToPreviousStep}
          />
        ) : (
          <Price
            price={price}
            setPrice={setPrice}
            salePrice={salePrice}
            setSalePrice={setSalePrice}
            goToPreviousStep={goToPreviousStep}
            onSubmit={handleFormSubmit}
          />
        )}
      </FormContainer>
    </Form>
  );
};

const Form = styled.form`
  margin-left: 2em;
`;

const Title = styled.h2`
  ${title}
`;

const FormContainer = styled.div`
  max-width: ${({ size }) =>
    size === "sm" ? "25em" : size === "md" ? "38em" : "52em"};
  padding-bottom: 1em;
`;
export default memo(AddProductForm);
