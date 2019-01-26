import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

import { environment } from '../../../environments/environment';

// Services
import { ErrorHandlerService } from '../helpers/error-handler.service';

// Interface
import { Account } from '../../_interfaces/Account.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BankService {

    private apiDomain   = environment.APIDomain;
    private bankUrl     = '5b3e4e143000003a06abc682';

    constructor(private http: HttpClient,
                private errorHandler: ErrorHandlerService) { }

    getBankData(): Observable<Account[]> {
        return this.http.get<Account[]>(this.apiDomain + this.bankUrl).pipe(
            catchError(this.errorHandler.handleError)
        );
    }

}
