import { EmitArgsBase, EmitResultBase } from "./base";

export interface ReceptionPatient {
  name: string;
  eiAuto: number;
  targetName: string;
  birthday: string;
  kinds: QuestionnaireKind[];
}

export type GetReceptionPatientsResult = EmitResultBase<ReceptionPatient[]>;

export interface GetReceptionPatientsArgs extends EmitArgsBase {}

export enum QuestionnaireKind {
  건강검진,
  암검진,
}
