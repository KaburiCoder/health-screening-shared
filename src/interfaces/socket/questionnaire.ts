import { IQuestionnaire } from "../questionnaire";
import { EmitArgsBase, EmitResultBase } from "./base";

export interface SaveQuestionnaireArgs extends EmitArgsBase, IQuestionnaire {
  eiAuto: number;
  error: { [key: string]: string };
}

export interface SaveQuestionnaireResult extends EmitResultBase<number> {}
