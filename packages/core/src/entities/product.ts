import { Base } from "./base";

export default class ProductEntity extends Base {
    name: string;
    sku: string;
    quantity: string;
    unit: string;
    price: number;
    qrCodeUrl: string;
}
