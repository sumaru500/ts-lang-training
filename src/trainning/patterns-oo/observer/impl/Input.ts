import { AbstractObservable } from "../abstract";

export default class Input extends AbstractObservable {
    public click(): void {
        this.notify({eventName: "ClickInput"})
    }
}
