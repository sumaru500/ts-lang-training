import { DBConnection } from "./DBConnection";
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

console.group('Singleton Example');
const connections = [
    DBConnection.getInstance(),
    DBConnection.getInstance(),
    DBConnection.getInstance(),
    DBConnection.getInstance(),
    DBConnection.getInstance(),
    DBConnection.getInstance(),
]

of(...connections)
.pipe(
    map((connection: DBConnection) => connection.getId()),
)
.subscribe(id => console.log(`id of singleton connection: ${id}`));

console.groupEnd();

export {DBConnection}