export type DialogParams = {
  title?: string;
  message: string;
  cancel?: () => void;
  confirm?: () => void;
  cancelText?: string;
  cancelColor?: string;
  confirmText?: string;
  confirmColor?: string;
};

export type ResponseDataConfig = {
  data: any;
  code: number;
  message: string;
};
export type ResponseErrorConfig = {
  code: number;
  message: string;
};

export type ErrorFuncConfig = (
  url: string,
  message: string
) => Promise<ResponseErrorConfig>;

export type InterceptorsConfig = {
  [key: string | number]: ErrorFuncConfig;
};
