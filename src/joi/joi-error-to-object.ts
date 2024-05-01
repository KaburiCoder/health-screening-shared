import Joi, { ValidationError } from "joi";

export function flattenJoiError(validateError: ValidationError) {
  const error = validateError.details.reduce(
    (acc: { [key: string]: string }, cur: Joi.ValidationErrorItem) => {
      if (cur.context?.label) {
        acc[cur.context.label] = cur.message;
      }
      return acc;
    },
    {}
  );

  return error;
}
