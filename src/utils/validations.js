import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  //   accountType: yup.string()
});

export const profileSchema = yup.object().shape({
  // fee: yup.number().required(),
  // skills: yup.array().required(),
  bio: yup
    .string()
    .required()
    .min(15, "Bio must be at least 15 characters")
    .max(500),
});
