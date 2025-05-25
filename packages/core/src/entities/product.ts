import { BaseEntity } from "./base"

export default class ProductEntity extends BaseEntity {
    name: string
    sku: string
    quantity: string
    unit: string
    price: number
    qrCodeUrl: string
}
