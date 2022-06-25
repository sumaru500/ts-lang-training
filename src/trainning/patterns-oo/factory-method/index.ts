import { BicycleHandler, CarHandler, PlaneHandler } from "./impl/handler"

console.group('Factory method example')
const plane = new PlaneHandler()
const car = new CarHandler()
const bicycle = new BicycleHandler()

plane.moveVehicle();
car.moveVehicle();
bicycle.moveVehicle();
console.groupEnd();

export {BicycleHandler, CarHandler, PlaneHandler}