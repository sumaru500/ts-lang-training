import { Observer } from "../interface";
import ObservableEvent from "../interface/ObservableEvent";

export default class Logger implements Observer {
    update(event: ObservableEvent): void {
        console.log(`Receive an event : ${event.eventName}`)
    } 
}