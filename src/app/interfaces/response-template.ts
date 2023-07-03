export interface ResponseTemplate<T> {
  message?: string;
  httpStatus?: number;
  data?: T;
  errors?: string;
}
