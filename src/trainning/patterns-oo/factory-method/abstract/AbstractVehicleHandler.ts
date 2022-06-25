import { Vehicle, VehicleHandler } from "../interface";

// interface AbstractVehicleHandler extends VehicleHandler {}
abstract class AbstractVehicleHandler implements VehicleHandler {
    
    moveVehicle(): void {
        const vehicle = this.createVehicle();
        console.group('Moving a vehicle', vehicle);
        console.log('Start motor');
        vehicle.move();
        console.log('Stop motor');
        console.groupEnd();
    }
    abstract createVehicle() : Vehicle;
}

export default AbstractVehicleHandler;