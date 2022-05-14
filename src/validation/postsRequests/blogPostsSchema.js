const Joi = require('joi');

exports.postBlogSchema = Joi.object()
  .keys({
    postName: Joi.string()
        .min(3)
        .max(40)
        .required(),
    postInfo: Joi.string()
        .min(3)
        .max(40)
        .required(),
    writtenBy: Joi.string()
        .min(3)
        .max(40)
        .required(),
    comments: Joi.object()
        .min(1)
        .max(40),
    donations: Joi.string()
        .min(3)
        .max(40)
        .required(),
  })  
