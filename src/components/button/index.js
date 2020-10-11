import Link from "next/link";
import { AddProduct, AddIcon, Button, NextIcon, PreviousIcon } from "./style";
import addIcon from "../../img/add.svg";
import nextIcon from "../../img/next.svg";
import previousIcon from "../../img/previous.svg";
import useTranslation from "../../hooks/useTranslation";
import strings from "../../translations/strings/productsPage";
import { useContext } from "react";
import { LocaleContext } from "../../contexts/locale";
import { ContentDirectionContext } from "../../contexts/contentDirection";

export const AddProductButton = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const contentDirection = useContext(ContentDirectionContext);

  return (
    <Link href={`/${locale}/add-product`} passHref>
      <AddProduct>
        <AddIcon contentDirection={contentDirection} src={addIcon} alt="" />
        {t(strings, "addProduct")}
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
