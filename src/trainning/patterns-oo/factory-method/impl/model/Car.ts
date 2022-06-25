import { Vehicle } from "../../interface";

export default class Car implements Vehicle {
    move(): void {
        console.log('Move car');
    }
}