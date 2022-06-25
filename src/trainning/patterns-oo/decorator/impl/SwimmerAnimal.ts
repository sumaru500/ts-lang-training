import {DecoratorAnimal} from "../abstract";

class SwimmerAnimal extends DecoratorAnimal {
    move(): void {
        console.log('Swimming...');
        this._animal.move();
    }
}

export default SwimmerAnimal;