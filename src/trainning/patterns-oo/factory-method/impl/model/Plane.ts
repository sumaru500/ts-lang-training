import { Vehicle } from "../../interface";

export default class Plane implements Vehicle {
    move(): void {
        console.log('Move Plane');
    }
}