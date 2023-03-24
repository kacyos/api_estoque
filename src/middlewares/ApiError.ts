import { NextFunction, Request, Response } from 'express';
import { ApiError } from 'src/helpers/api-errors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const erroMiddleware = (error:Error & ApiError, _request:Request, response:Response, next: NextFunction) => {
  const statusCode = error.statusCode || 500;
  const message = error.statusCode ? error.message : 'Internal server Error.';

  return response.status(statusCode).json({ message, error: true });
};

