interface EmitErrorResult {
  status: "error";
  error: { [key: string]: string };
}

interface EmitSuccessResult<T> {
  status: "success";
  data: T;
}

export type EmitResultBase<T> = EmitSuccessResult<T> | EmitErrorResult 

export interface EmitArgsBase {
  key: string;
}

