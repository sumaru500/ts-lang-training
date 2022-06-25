import { AbstractVehicleHandler } from "../../abstract";
import { Vehicle, VehicleHandler } from "../../interface";
import { Car } from "../model";

export default class CarHandler extends AbstractVehicleHandler implements VehicleHandler{
    createVehicle(): Vehicle {
        return new Car();
    }
}