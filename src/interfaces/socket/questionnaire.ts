import { IQuestionnaire } from "../questionnaire";
import { EmitArgsBase, EmitResultBase } from "./base";

export interface SaveQuestionnaireArgs extends EmitArgsBase, IQuestionnaire {
  eiAuto: number;
}

export interface SaveQuestionnaireResult<T> extends EmitResultBase<T> {}
