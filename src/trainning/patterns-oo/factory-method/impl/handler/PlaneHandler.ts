import { AbstractVehicleHandler } from "../../abstract";
import { Vehicle, VehicleHandler } from "../../interface";
import { Plane } from "../model";

export default class PlaneHandler extends AbstractVehicleHandler implements VehicleHandler{
    createVehicle(): Vehicle {
        return new Plane();
    }
}