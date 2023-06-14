import { ZodError } from 'zod';
import CustomError from './CustomError';

type Errors = {
  message: string;
};

type ErrResponse = {
  timestamp: Date;
  statusCode: number;
  errors: Errors[];
};

const formatError = (err: CustomError | ZodError) => {
  const errResponse = {
    timestamp: new Date(),
  } as ErrResponse;

  // zod Error
  if (err instanceof ZodError) {
    errResponse.statusCode = 400;

    const errors: Errors[] = [];
    const formattedErr = err.format();

    for (const [key, value] of Object.entries(formattedErr)) {
      if (key === '_errors') {
        continue;
      }
      // @ts-ignore:next-line
      errors.push({ message: value._errors[0] });
    }

    errResponse.errors = errors;
  } else {
    //normal error
    errResponse.statusCode = err.statusCode ?? 500;
    errResponse.errors = [{ message: err.message ?? 'Internal Server Error' }];
  }

  return errResponse;
};

export default formatError;
