import { Vehicle } from "../../interface";

export default class Bicycle implements Vehicle {
    move(): void {
        console.log('Move bicycle');
    }
}