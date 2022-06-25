import ObservableEvent from "./ObservableEvent";

export default interface Observer {
    update( event: ObservableEvent): void;
} 