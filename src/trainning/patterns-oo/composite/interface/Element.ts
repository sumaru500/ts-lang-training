type ValueType = {value: number}
interface Element<T extends ValueType > {
    hasChildren(): boolean;
    getWeight(): number;
    addElement(...elems: Element<T>[]): void;
}
export type {ValueType, Element}