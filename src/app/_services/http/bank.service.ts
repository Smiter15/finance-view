import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/internal/operators';

import { environment } from '../../../environments/environment';

// Services
import { ErrorHandlerService } from '../helpers/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

    private apiDomain   = environment.APIDomain;
    private bankUrl     = '5b3e4e143000003a06abc682';

    constructor(private http: HttpClient,
                private errorHandler: ErrorHandlerService) { }

    getBankData() {
        return this.http.get<any>(this.apiDomain + this.bankUrl).pipe(
            catchError(this.errorHandler.handleError)
        );
    }

}
