import Joi from "joi";
import { IQuestionnaire } from "../interfaces/questionnaire";
import { HistorySchema } from "./history";
import { SmokingSchema } from "./smoking";
import { DrinkSchema } from "./drink";
import { ActivitySchema } from "./activity";
import { AddExamSchema } from "./add-exam";

export const QuestionnaireSchema = Joi.object<IQuestionnaire>({
  history: HistorySchema.required(),
  smoking: SmokingSchema.required(),
  drink: DrinkSchema.required(),
  activity: ActivitySchema.required(),
  depression: Joi.any(),
  cognitive: Joi.any(),
  addExam: AddExamSchema.when("isAddExam", {
    is: true,
    then: Joi.required(),
  }),
  isAddExam: Joi.bool()
});