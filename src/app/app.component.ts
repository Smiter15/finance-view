import { Component, OnInit } from '@angular/core';

// Services
import { BankService } from './_services/http/bank.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private bankService: BankService) { }

    ngOnInit() {
        this.bankService.getBankData().subscribe(data => {
            console.log(data);
        });
    }

}
