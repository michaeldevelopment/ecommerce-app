import { formDataValuesType } from "../types/dataTypes";

export const formData: formDataValuesType = [
  {
    label: "Name",
    placeholder: "Michael Sanabria",
    type: "text",
    slug: "name",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 3,
        message: "Name is too short (+3 characters)",
      },
      maxLength: {
        value: 12,
        message: "Name is too long (-12 characters)",
      },
    },
  },
  {
    label: "Email Address",
    placeholder: "michael@gmail.com",
    type: "text",
    slug: "emailAddress",
    validateOptions: {
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "This is not a valid email",
      },
      required: {
        value: true,
        message: "This is a required field",
      },
    },
  },
  {
    label: "Phone Number",
    placeholder: "203-456-7891",
    type: "number",
    slug: "phoneNumber",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 5,
        message: "Phone number is too short (+3 characters)",
      },
      maxLength: {
        value: 20,
        message: "Phone number is too long (-15 characters)",
      },
    },
  },
  {
    label: "Address",
    placeholder: "320 Letton Dr",
    type: "text",
    slug: "address",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 8,
        message: "Address is too short (+8 characters)",
      },
      maxLength: {
        value: 20,
        message: "Address is too long (-20 characters)",
      },
    },
  },
  {
    label: "ZIP Code",
    placeholder: "1001",
    type: "number",
    slug: "zipCode",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 3,
        message: "ZIP Code is too short (-3 characters)",
      },
      maxLength: {
        value: 7,
        message: "ZIP Code is too long (+7 characters)",
      },
    },
  },
  {
    label: "City",
    placeholder: "New York",
    type: "text",
    slug: "city",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
    },
  },
  {
    label: "Country",
    placeholder: "United States",
    type: "text",
    slug: "country",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
    },
  },
  {
    label: "e-Money Number",
    placeholder: "12345678",
    type: "number",
    slug: "eMoneyNumber",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 5,
        message: "e-Money Number is too short (-5 characters)",
      },
      maxLength: {
        value: 10,
        message: "e-Money Number is too long (+10 characters)",
      },
    },
  },
  {
    label: "e-Money PIN",
    placeholder: "1234",
    type: "text",
    slug: "eMoneyPIN",
    validateOptions: {
      required: {
        value: true,
        message: "This is a required field",
      },
      minLength: {
        value: 4,
        message: "e-Money PIN is too short (-4 characters)",
      },
    },
  },
];
