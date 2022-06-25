import {DecoratorAnimal} from "../abstract";

class FlyerAnimal extends DecoratorAnimal {
    move(): void {
        console.log('Flying...');
        this._animal.move()
    }
}

export default FlyerAnimal;