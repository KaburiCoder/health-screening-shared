import { EmitArgsBase, EmitResultBase } from "./base";

export interface ReceptionPatient {
  name: string;
  eiAuto: number;
  ejAuto: number;
  targetName: string;
  birthday: string;
  kinds: QuestionnaireKind[];
  diagnose: QuestionnaireDiagnose;
}

export type GetReceptionPatientsResult = EmitResultBase<ReceptionPatient[]>;

export interface GetReceptionPatientsArgs extends EmitArgsBase { }
export interface QuestionnaireKind {
  kind: EQuestionnaireKind;
  name: string;
  written: boolean;
  addExam: boolean;
  type: EQuestionnaireType;
  code: string;
}

export interface QuestionnaireDiagnose {
  smoking: boolean;
  drinking: boolean;
  exercise: boolean;
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