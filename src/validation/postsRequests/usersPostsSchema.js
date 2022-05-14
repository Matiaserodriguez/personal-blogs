const Joi = require('joi');

exports.postUserSchema = Joi.object()
  .keys({
    firstName: Joi.string()
        .min(3)
        .max(40)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(40)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(8)
        .max(40)
        .required(),
  })  
