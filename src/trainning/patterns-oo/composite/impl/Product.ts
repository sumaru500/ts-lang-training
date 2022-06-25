import { Currency, PriceType } from "../interface";
import {AbstractTreeNode} from "../abstract";

export default class Product extends AbstractTreeNode<PriceType> {
    getPrice() : number {
        return this.getWeight();
    }
    getCurrency() : Currency {
        return this.baseValue?.currency || 'USD'
    }
}