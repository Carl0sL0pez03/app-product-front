export interface ICreditCardFormData {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface ICreditCardModalProps {
  onClose: () => void;
  onSubmit: (data: ICreditCardFormData) => void;
}
