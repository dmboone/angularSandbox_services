import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] // must include your service in list of providers to use
  // in this case we don't include AccountService because we want to reference the parent version inside app.component rather than create another instance of it here
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){} // instantiates our services

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status); // now we can use the service
    this.accountsService.statusUpdated.emit(status); // emits the statusUpdated event
  }
}
