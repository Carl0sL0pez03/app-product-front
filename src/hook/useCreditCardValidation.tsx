import { useState } from "react";
import { MASTERCARD, VISA } from "../store/types/cartTypes";

const useCreditCardValidation = () => {
  const [cardType, setCardType] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateCardNumber = (cardNumber: string): void => {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;

    if (visaRegEx.test(cardNumber)) {
      setCardType(VISA);
      setIsValid(true);
    } else if (mastercardRegEx.test(cardNumber)) {
      setCardType(MASTERCARD);
      setIsValid(true);
    } else {
      setCardType(null);
      setIsValid(false);
    }
  };

  const validateExpiryDate = (date: string): boolean => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const parts = date?.split("/");
    const expMonth = parseInt(parts[0], 10);
    const expYear = parseInt(parts[1], 10) + 2000;

    return (
      expYear > currentYear ||
      (expYear === currentYear && expMonth >= currentMonth)
    );
  };

  const validateCVV = (cvv: string, type: string): boolean => {
    return (type === VISA || type === MASTERCARD) && cvv?.length === 3;
  };

  return {
    validateCardNumber,
    validateExpiryDate,
    validateCVV,
    cardType,
    isValid,
  };
};

export default useCreditCardValidation;
