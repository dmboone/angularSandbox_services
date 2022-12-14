import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "../logging.service";

@Injectable() // allows us to inject a service within THIS service
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];
    statusUpdated = new EventEmitter<string>(); // creates a new event that we can listen for in new-account component and any other component that uses this service

    constructor(private loggingService: LoggingService){} // can now inject service within this service

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
    }
    
    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
    }
}