export type OmitSymbols<T> = {
  [K in keyof T as K extends symbol ? never : K]: T[K];
};
