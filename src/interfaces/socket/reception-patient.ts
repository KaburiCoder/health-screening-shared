import { EmitArgsBase, EmitResultBase } from "./base";

export interface ReceptionPatient {
  name: string;
  eiAuto: number;
  ejAuto: number;
  targetName: string;
  birthday: string;
  kinds: QuestionnaireKind[];
  diagnose: QuestionnaireDiagnose;
  status: QuestionnaireStatus;
}

export type GetReceptionPatientsResult = EmitResultBase<ReceptionPatient[]>;

export interface GetReceptionPatientsArgs extends EmitArgsBase { }
export interface QuestionnaireKind {
  kind: EQuestionnaireKind;
  name: string;
  written: boolean;
  addList: ("elderly" | "depression" | "cognitive")[];
  addExam: boolean;
  type: EQuestionnaireType;
  code: string;
}

export interface QuestionnaireDiagnose {
  smoking: boolean;
  drinking: boolean;
  exercise: boolean;
}

export interface QuestionnaireStatus {
  generalQn: boolean;
  lifestyle: QuestionnaireLifestyle;
}

export interface QuestionnaireLifestyle {
  smoking: boolean;
  drinking: boolean;
  exercise: boolean;
  nutrition: boolean;
  overweight: boolean;
}

export enum EQuestionnaireKind {
  일반검진,
  생활습관,
  구강검진,
  암검진
}

export enum EQuestionnaireType {
  일반,
  영유아,
  학교밖청소년
}