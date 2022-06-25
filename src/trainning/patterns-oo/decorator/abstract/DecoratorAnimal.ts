import {Animal} from '../interface'
abstract class DecoratorAnimal implements Animal {
    protected _animal: Animal;
    constructor(animal: Animal) {
        this._animal = animal;
    }
    abstract move(): void;
}

export default DecoratorAnimal; 