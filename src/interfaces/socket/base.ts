export interface EmitResultBase<T> {
  status: "success" | "error";
  data: T;
}

export interface EmitArgsBase {
  key: string;
}
