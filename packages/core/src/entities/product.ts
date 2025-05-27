import { BaseEntity } from "./base"

export default class ProductEntity extends BaseEntity {
    name: string
    sku: string
    quantity: number
    unit: string
    price: number
    qrCodeUrl: string
}
