import { ValueType } from ".";
type Currency = "USD" | "EUR" | "VND";
type PriceType = ValueType & {provider?: string, currency: Currency}
export type {Currency, PriceType}