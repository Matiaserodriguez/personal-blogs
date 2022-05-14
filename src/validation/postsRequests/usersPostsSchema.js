const Joi = require('joi');

exports.postUserSchema = Joi.object()
  .keys({
    userName: Joi.string()
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
