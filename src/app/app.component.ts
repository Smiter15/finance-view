import { Component, OnInit } from '@angular/core';

// Services
import { BankService } from './_services/http/bank.service';

// Interfaces
export interface Account {
    accounts: any;
    active: boolean;
    balance: {
        amount: number;
        currency_iso: string,
        id: string
    };
    id: string;
    provider: {
        account_number?: string;
        description: string;
        icon: string;
        sort_code?: string;
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
    public activeAccount: Account;

    public transactions: any;
    public transactionDates = [];

    constructor(private bankService: BankService) { }

    ngOnInit() {
        this.bankService.getBankData().subscribe(data => {
            this.accounts = data.accounts;
            this.selectAccount(this.accounts[0]);
        }, error => {
            console.error('ERROR: Receiving bank data: ', error);
        });
    }

    public selectAccount(account: Account) {
        this.activeAccount = account;
        this.transactions = account.transactions;
        this.transactionDates = Array.from(new Set(this.transactions.map(transaction => transaction.date)));
        for (let i = 0; i < this.accounts.length; i++) {
            this.accounts[i].active = (account.id === this.accounts[i].id);
        }
    }

}
