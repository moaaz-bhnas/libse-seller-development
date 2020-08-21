import { memo, useState, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { Input } from "../input/style";
import { useDispatch } from "react-redux";
import { registerSeller } from "../../redux/actions/sellerRegistrationActions";
import { AuthContext } from "../../contexts/auth";
import { SellerContext } from "../../contexts/seller";

import styled from "styled-components";
import theme from "../../shared/theme";
import { rectButton } from "../button/style";
import { title } from "../title/style";

const Register = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { uid, email } = useContext(AuthContext);
  const { setIsSeller } = useContext(SellerContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [openingHour, setOpeningHour] = useState("");
  const [closingHour, setClosingHour] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const seller = {
        uid,
        email,
        firstName,
        lastName,
        phoneNumber,
        storeName,
        address,
        openingHour,
        closingHour,
      };
      dispatch(registerSeller(seller, setIsSeller, router));
    },
    [
      firstName,
      lastName,
      phoneNumber,
      storeName,
      address,
      openingHour,
      closingHour,
    ]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Register your store</Title>

      <PersonalInfo>
        <SubTitle>Personal Information</SubTitle>
        <InputGroup>
          <Input
            half
            type="text"
            aria-label="First name"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <Input
            half
            type="text"
            aria-label="Last name"
            placeholder="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </InputGroup>
        <Input
          type="tel"
          aria-label="Phone number"
          placeholder="Phone number (e.g. 01027050131)"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </PersonalInfo>

      <Hr />

      <ShopInfo>
        <SubTitle>Store</SubTitle>
        <Input
          type="text"
          aria-label="Store name"
          placeholder="Name"
          value={storeName}
          onChange={(event) => setStoreName(event.target.value)}
          required
        />
        <Input
          type="text"
          aria-label="Store address"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </ShopInfo>

      <Hr />

      <WorkingHours>
        <SubTitle>Working Hours</SubTitle>

        <InputGroup>
          <InputContainer>
            <Label htmlFor="workingHours__from">From:</Label>
            <Input
              type="time"
              id="workingHours__from"
              value={openingHour}
              onChange={(event) => setOpeningHour(event.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="workingHours__to">To:</Label>
            <Input
              type="time"
              id="workingHours__to"
              value={closingHour}
              onChange={(event) => setClosingHour(event.target.value)}
              required
            />
          </InputContainer>
        </InputGroup>
      </WorkingHours>

      <SubmitButton type="submit">Register</SubmitButton>
    </Form>
  );
};

// styles
const Form = styled.form`
  max-width: 30em;
  padding-bottom: 2em;
`;

const Title = styled.h2`
  ${title}
`;

const PersonalInfo = styled.div``;

const SubTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hr = styled.hr`
  margin: 0.5em 0 1em;
  border: 0.5px solid ${theme.border.grey};
`;

const ShopInfo = styled.div``;

const WorkingHours = styled.div`
  margin-bottom: 0.7em;
`;

const InputContainer = styled.div`
  flex: 0 calc(50% - 0.5em);
`;

const Label = styled.label``;

const SubmitButton = styled.button`
  ${rectButton}
`;

export default memo(Register);
