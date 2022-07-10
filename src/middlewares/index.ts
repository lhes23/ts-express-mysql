import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const httpErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new createHttpError.NotFound());
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status,
    message: err.message,
  });
};
