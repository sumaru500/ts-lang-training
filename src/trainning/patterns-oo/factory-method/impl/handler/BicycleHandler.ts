import { AbstractVehicleHandler } from "../../abstract";
import { Vehicle, VehicleHandler } from "../../interface";
import { Bicycle} from "../model";

export default class BicycleHandler extends AbstractVehicleHandler implements VehicleHandler{
    createVehicle(): Vehicle {
        return new Bicycle();
    }
}