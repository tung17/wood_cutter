import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpService, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message;
    const error:any = exception.getResponse();
    message = error.message;
    // console.log(error);

    if (exception.getStatus() === HttpStatus.NOT_FOUND) {
        status = HttpStatus.NOT_FOUND;
        message = error.message
    }
    
    if(exception.getStatus() === HttpStatus.UNAUTHORIZED)
    {
        status = HttpStatus.UNAUTHORIZED;
        message = error.error;
    }
    if (exception.getStatus() === HttpStatus.SERVICE_UNAVAILABLE) {
        status = HttpStatus.SERVICE_UNAVAILABLE;
        message = error.message
    }
   
    if (exception.getStatus() === HttpStatus.NOT_ACCEPTABLE) {
        status = HttpStatus.NOT_ACCEPTABLE;
        message = error.message
    }
   
    if (exception.getStatus() === HttpStatus.EXPECTATION_FAILED) {
        status = HttpStatus.EXPECTATION_FAILED;
        message = error.message;
    }
   
    if (exception.getStatus() === HttpStatus.BAD_REQUEST) {
        status = HttpStatus.BAD_REQUEST;
        message = error.message;
    }

    response
      .status(status)
      .json({
        success:false,
        status: status,
        msg:message,
        data:[]
      });
  }
}