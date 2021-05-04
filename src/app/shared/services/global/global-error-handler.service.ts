
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import {  LogService } from './log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private logger: LogService) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);

    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
    } else {
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
    }

    this.logger.log(message, stackTrace);

  }
}

