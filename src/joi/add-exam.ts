import Joi from "joi";
import { IAddExam } from "../interfaces";

export const AddExamSchema = Joi.object<IAddExam>({
  n11: Joi.bool().required(),
  n12: Joi.bool().required(),
  n13_1: Joi.bool().required(),
  n13_2: Joi.bool().required(),
  n13_3: Joi.bool().required(),
  n13_4: Joi.bool().required(),
  n13_5: Joi.bool().required(),
  n13_6: Joi.bool().required(),
  n14: Joi.bool().required(),
  n15: Joi.bool().required(),
});
