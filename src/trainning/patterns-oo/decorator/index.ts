import { Dog, FlyerAnimal, SwimmerAnimal } from "./impl"

console.group('Decorator example');
const pureDog = new Dog();
pureDog.move();
const flyerDog = new FlyerAnimal(pureDog);
flyerDog.move()
const swimmerDog = new SwimmerAnimal(pureDog);
swimmerDog.move();
const superDog = new SwimmerAnimal(flyerDog);
superDog.move();

console.groupEnd();


export {}