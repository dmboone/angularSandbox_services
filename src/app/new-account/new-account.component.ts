import { Component } from '@angular/core';
import { AccountsService } from '../account/accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // must include your service in list of providers to use
  // in this case we don't include AccountService because we want to reference the parent version inside app.component rather than create another instance of it here
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService){ // instantiating our services
    this.accountService.statusUpdated.subscribe( // this will run when the status updated event occurs from the accounts service
      (status: string) => alert('New Status: ' + status)
    );
  } 

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus); // now we can use the service
  }
}
