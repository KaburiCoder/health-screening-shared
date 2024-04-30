import Joi from "joi";

const ActiveTermSchema = Joi.object({
  hours: Joi.number().min(1).max(23).required(),
  minutes: Joi.number().min(0).max(59).default(0).required(),
});

export const ActivitySchema = Joi.object({
  n8_1: Joi.number().min(1).max(7).required(),
  n8_2: ActiveTermSchema.required(),
  n9_1: Joi.number().min(1).max(7).required(),
  n9_2: ActiveTermSchema.required(),
  n10: Joi.number().required(),
});
