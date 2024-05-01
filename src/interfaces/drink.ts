export interface IDrink {
  n7?: IDrinkN7;
  n7_1?: IDrinkingKind;
  n7_2?: IDrinkingKind;
}

export interface IDrinkN7 {
  type?: EDrinkingFreqType;
  frequency?: number;
}

export interface IDrinkingKind {
  soju?: IDrinkingFrequency;
  beer?: IDrinkingFrequency;
  liquor?: IDrinkingFrequency;
  makgeolli?: IDrinkingFrequency;
  wine?: IDrinkingFrequency;
}

export interface IDrinkingFrequency {
  [key: string]: number | undefined;
  cup?: number;
  bottle?: number;
  can?: number;
  cc?: number;
}

export enum EDrinkingFreqType {
  WEEKS = 1,
  MONTHS = 2,
  YEARS = 3,
  DO_NOT = 4,
}
