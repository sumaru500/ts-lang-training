import Observer from "./Observer";

export default interface Observable {
    subcrible(o: Observer) : void;
    unSubcrible(o: Observer) : void;
}