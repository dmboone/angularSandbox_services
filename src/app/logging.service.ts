import { Injectable } from "@angular/core";

@Injectable() // Angular may later require us to include this if we inject this service into another service
export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}