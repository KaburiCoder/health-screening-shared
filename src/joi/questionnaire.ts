import Joi from "joi";
import { IQuestionnaire } from "../interfaces/questionnaire";
import { HistorySchema } from "./history";
// import { SmokingSchema } from "./smoking";
// import { DrinkSchema } from "./drink";
// import { ActivitySchema } from "./activity";

const his = HistorySchema;
export const QuestionnaireSchema = Joi.object<IQuestionnaire>({
  history: his.required(),
  // smoking: SmokingSchema.required(),
  // drink: DrinkSchema.required(),
  // activity: ActivitySchema.required(),
});
