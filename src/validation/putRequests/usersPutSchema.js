const Joi = require('joi');

exports.putUserSchema = Joi.object()
.keys({
    firstName: Joi.string()
        .min(3)
        .max(40),
    lastName: Joi.string()
        .min(3)
        .max(40),
    email: Joi.string()
        .email(),
    password: Joi.string()
        .min(8)
        .max(40),
  })  
