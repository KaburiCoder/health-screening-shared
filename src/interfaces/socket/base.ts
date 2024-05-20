interface EmitResultBase<T> {
  status: "success" | "error";
  message?: string;
  data?: T;
  error?: {
    [key: string]: string;
  };
}

interface EmitArgsBase {
  key: string;
}

export type { EmitArgsBase, EmitResultBase };
