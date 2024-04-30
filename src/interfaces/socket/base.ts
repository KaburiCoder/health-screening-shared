export interface EmitResultBase<T> {
  status: "success" | "error";
  data?: T;
  error?: { [key: string]: string };
}

export interface EmitArgsBase {
  key: string;
}
