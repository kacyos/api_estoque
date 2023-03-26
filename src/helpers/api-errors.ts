
export class ApiError extends Error {
  public readonly statusCode:number;
  public readonly info: unknown;

  constructor (message: string, statusCode: number, info?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.info = info;
  }
}

export class BadRequestError extends ApiError {
  constructor (message: string) {
    super(message, 400);
  }
}

export class ConflictError extends ApiError {
  constructor (message: string) {
    super(message, 409);
  }
}

