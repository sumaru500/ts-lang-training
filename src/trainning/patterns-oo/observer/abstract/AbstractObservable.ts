import { Observable, Observer } from "../interface";
import ObservableEvent from "../interface/ObservableEvent";

class AbstractObservable implements Observable {
    unSubcrible(o: Observer): void {
        const index = this.observers.findIndex(curr => curr === o);
        if (index !== -1) {
            this.observers.splice(index, 1)
        }
    }
    subcrible(o: Observer): void {
        this.observers.push(o)
    }

    protected observers : Observer[] = [];

    protected notify(event: ObservableEvent) {
        this.observers.forEach(o => o.update(event));
    }
    
}

export default AbstractObservable;