import {Animal} from "../interface";

class Dog implements Animal {
    move(): void {
        console.log("Moving like Dog");
    } 
}

export default Dog;