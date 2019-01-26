import { Component, OnInit } from '@angular/core';

// Services
import { BankService } from './_services/http/bank.service';

// Interfaces
export interface Account {
    accounts: any;
    balance: {
        amount: number;
        currency_iso: string,
        id: string
    };
    provider: {
        account_number: string;
        description: string;
        icon: string;
        sort_code: string;
        title: string;
    };
    transactions: {
        amount: {
            value: number;
            currency_iso: string;
        },
        category_title: string;
        date: string;
        description: string;
        id: string;
    };
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public accounts: Account[] = [];

    constructor(private bankService: BankService) { }

    ngOnInit() {
        this.bankService.getBankData().subscribe(data => {
            console.log(data.accounts);
            this.accounts = data.accounts;
        }, error => {
            console.error('ERROR: Receiving bank data: ', error);
        });
    }

    selectAccount(account) {
        console.log(account);
    }

}
