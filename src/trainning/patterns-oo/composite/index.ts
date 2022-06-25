import { Product } from "./impl";

console.group('Composite example')
const pneu1 = new Product();
pneu1.setValue({value: 100, currency: 'USD'});
const pneu2 = new Product();
pneu2.setValue({value: 100, currency: 'USD'});
const pneu3 = new Product();
pneu3.setValue({value: 200, currency: 'USD'});
const pneu4 = new Product();
pneu4.setValue({value: 200, currency: 'USD'});

const automobile = new Product();
automobile.setValue({value: 50, currency: 'USD'});
automobile.addElement(pneu1, pneu2, pneu3, pneu4);

console.log(`Price of my auto is ${automobile.getPrice()} ${automobile.getCurrency()}`);

console.groupEnd();

export {}