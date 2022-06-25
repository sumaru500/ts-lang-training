import { Input, Logger } from "./impl";
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';


console.group('Observer example');
const input = new Input();
input.subcrible(new Logger());
interval(1000).pipe(
    take(5),
).subscribe(num => input.click())

console.groupEnd();
export {}