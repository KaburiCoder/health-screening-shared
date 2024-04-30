import { IQuestionnaire } from "health-screening-shared/interfaces";
import { EmitArgsBase, EmitResultBase } from "./base/result-base";

export interface SaveQuestionnaireArgs extends EmitArgsBase, IQuestionnaire {
  eiAuto: number;
}

export interface SaveQuestionnaireResult extends EmitResultBase<number> {}
