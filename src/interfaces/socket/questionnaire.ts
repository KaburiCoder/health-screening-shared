import { IQuestionnaire } from "../questionnaire";
import { EmitArgsBase, EmitResultBase } from "./base";

export interface SaveQuestionnaireArgs extends EmitArgsBase, IQuestionnaire {
  eiAuto: number;
}

export type SaveQuestionnaireResult = EmitResultBase<any>;
