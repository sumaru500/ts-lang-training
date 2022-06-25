import { Element, ValueType } from "../interface";

abstract class AbstractElement<T extends ValueType> implements Element<T> {
    children: Element<T>[] = [];
    baseValue: T | null = null
    hasChildren(): boolean {
        return this.children.length > 0
    }
    getWeight(): number {
        if (!this.hasChildren()) {
            return this.baseValue?.value || 0; 
        }
        return this.children.reduce((acc, elem) => acc + elem.getWeight(), this.baseValue?.value || 0)
    }
    addElement(...elems: Element<T>[]): void {
        elems.forEach(elem => this.children.push(elem));
    }
    setValue(plusValue: T): void {
        this.baseValue = plusValue;
    }
}

export default AbstractElement