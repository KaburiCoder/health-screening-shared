import Joi from "joi";
// import { IQuestionnaire } from "../interfaces/questionnaire";
import { HistorySchema } from "./history";
import { SmokingSchema } from "./smoking";
import { DrinkSchema } from "./drink";
import { ActivitySchema } from "./activity";

export const QuestionnaireSchema = Joi.object({
  history: HistorySchema.required(),
  smoking: SmokingSchema.required(),
  drink: DrinkSchema.required(),
  activity: ActivitySchema.required(),
});
