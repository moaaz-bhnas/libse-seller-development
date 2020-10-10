import Link from "next/link";
import { AddProduct, AddIcon, Button, NextIcon, PreviousIcon } from "./style";
import addIcon from "../../img/add.svg";
import nextIcon from "../../img/next.svg";
import previousIcon from "../../img/previous.svg";
import useTranslation from "../../hooks/useTranslation";

export const AddProductButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={`/add-product`} passHref>
      <AddProduct>
        <AddIcon src={addIcon} alt="" />
        {t("addProduct")}
      </AddProduct>
    </Link>
  );
};

export const NextButton = ({
  onClick,
  disabled = false,
  positionedAbsolutely,
}) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      data-disabled={disabled}
      data-positioned-absolutely={positionedAbsolutely}
    >
      Next
      <NextIcon src={nextIcon} alt="" />
    </Button>
  );
};

export const PreviousButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <PreviousIcon src={previousIcon} alt="" />
      Prev
    </Button>
  );
};

// export const Button = ({ type, value, onClick }) => {
//   return (
//     <Button
//       type={type}
//       onClick={onClick}
//     >
//       {value}
//     </Button>
//   );
// }
