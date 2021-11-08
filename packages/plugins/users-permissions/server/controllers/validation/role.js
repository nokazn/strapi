'use strict';

const { yup, validateYupSchema } = require('@strapi/utils');

const createUserBodySchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required(),
    username: yup
      .string()
      .min(1)
      .required(),
    password: yup
      .string()
      .min(1)
      .required(),
    role: yup.strapiID(),
  })
  .noUnknown();

const updateUserBodySchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(1),
  username: yup.string().min(1),
  password: yup.string().min(1),
});

module.exports = {
  validateCreateUserBody: validateYupSchema(createUserBodySchema),
  validateUpdateUserBody: validateYupSchema(updateUserBodySchema),
};