const Joi = require('joi');

exports.putBlogSchema = Joi.object()
  .keys({
    postName: Joi.string()
        .min(3)
        .max(40),
    postInfo: Joi.string()
        .min(3)
        .max(40),
    writtenBy: Joi.string()
        .min(3)
        .max(40),
    comments: Joi.object()
        .min(1)
        .max(40),
    donations: Joi.string()
        .min(3)
        .max(40),
  })  
